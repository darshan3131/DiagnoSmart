import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-30px lg:mt-55px">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr.Mehta
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            She took the time to listen to all my concerns and explained everything in a way that made sense. I felt truly cared for. Highly recommended!{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr.Iyer
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Dr. Iyer diagnosed my condition quickly and provided effective treatment. Only reason I’m giving 4 stars is due to a bit of a wait time{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr.Kapoor
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Excellent experience with Dr. Kapoor. Very knowledgeable and professional. Followed up after the appointment to check on my recovery—something most doctors don’t do anymore!{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Dr. Sharma
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Dr. Sharma has a calm and reassuring presence. I came in feeling anxious, but he made me feel comfortable and confident about my treatment. He’s a gem!{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Darshan
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Good doctor, thorough with the examination. The only downside was a bit of a rush toward the end, probably due to a packed schedule. Otherwise, very helpful and polite.{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Dr.Drake
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                  <HiStar className="text-yellowColor w-[10px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from him. He treats so well providing the best medical services.{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;