import express from "express";
import { spawn } from "child_process";
const router = express.Router({ mergeParams: true });

const pythonScriptPathForSymptoms = "./symptoms.py";
const symptomsModel = "./aimodels/svc.pkl";

router.post("/symptoms", (req, res) => {
  let responseSent = false; // Flag to track if response has been sent
  try {
    const data = req.body.data;
    console.log("Received symptoms data:", data);
    // Ensure data is an array of symptomsa
    let symptomsArray = [];
    if (typeof data === "string") {
      // If string, split by comma and trim
      symptomsArray = data.split(",").map((s) => s.trim());
    } else if (Array.isArray(data)) {
      symptomsArray = data;
    } else {
      symptomsArray = [];
    }
    console.log("Parsed symptoms array:", symptomsArray);

    const pythonProcess = spawn("./venv/bin/python", [
      pythonScriptPathForSymptoms,
      "--loads",
      symptomsModel,
      JSON.stringify({ data: symptomsArray }),
    ]);
    let stdoutData = "";

    pythonProcess.stdout.on("data", (data) => {
      stdoutData += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      if (code !== 0) {
        if (!responseSent) {
          res.status(500).send("Python script error");
          responseSent = true;
        }
        return;
      }
      try {
        const prediction = JSON.parse(stdoutData);
        console.log("Prediction:", prediction);
        if (!responseSent) {
          res.json({ data: prediction });
          responseSent = true;
        }
      } catch (err) {
        console.error("JSON parse error:", err);
        if (!responseSent) {
          res.status(500).send("Invalid JSON from Python script");
          responseSent = true;
        }
      }
    });

    pythonProcess.on("error", (error) => {
      console.error("Python process error:", error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error");
        responseSent = true;
      }
    });
  } catch (error) {
    console.error("Error:", error);
    if (!responseSent) {
      responseSent = true;
      return res.status(500).send("Internal Server Error");
    }
  }
});

export default router;
