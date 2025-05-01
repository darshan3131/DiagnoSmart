import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    // Get currently booked doctor
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!doctor.ticketPrice || doctor.ticketPrice <= 0) {
      return res.status(400).json({ success: false, message: "Invalid doctor ticket price" });
    }

    // Check if Stripe keys are set
    if (!process.env.STRIPE_SECRET_KEY || !process.env.CLIENT_SITE_URL) {
      // Simulate a fake session for local testing
      const fakeSession = {
        id: "fake_session_id_local_test",
        url: `${req.protocol}://${req.get("host")}/checkout-success`,
      };

      const booking = new Booking({
        doctor: doctor._id,
        user: user._id,
        ticketPrice: doctor.ticketPrice,
        session: fakeSession.id,
      });

      try {
        await booking.save();
      } catch (bookingError) {
        console.error("Booking save error:", bookingError);
        return res.status(500).json({ success: false, message: "Error saving booking" });
      }

      return res.status(200).json({ success: true, message: "Successfully paid (local test)", session: fakeSession });
    }

    // Proceed with real Stripe session creation
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
        cancel_url: `${req.protocol}://${req.get("host")}/doctors/${doctor.id}`,
        customer_email: user.email,
        client_reference_id: req.params.doctorId,
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: doctor.ticketPrice * 100,
              product_data: {
                name: doctor.name,
                description: doctor.bio,
                images: [doctor.photo],
              },
            },
            quantity: 1,
          },
        ],
      });
    } catch (stripeError) {
      console.error("Stripe session creation error:", stripeError);
      return res.status(500).json({ success: false, message: "Error creating Stripe checkout session" });
    }

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });

    try {
      await booking.save();
    } catch (bookingError) {
      console.error("Booking save error:", bookingError);
      return res.status(500).json({ success: false, message: "Error saving booking" });
    }

    res.status(200).json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    console.error("Unexpected error in getCheckoutSession:", err);
    res.status(500).json({ success: false, message: "Error creating checkout session" });
  }
};
