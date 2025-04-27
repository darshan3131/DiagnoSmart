import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const SymptomChecker = () => {
  const [symptomInput, setSymptomInput] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddSymptom = () => {
    const trimmed = symptomInput.trim().toLowerCase();
    if (trimmed && !symptoms.includes(trimmed)) {
      setSymptoms([...symptoms, trimmed]);
      setSymptomInput("");
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSymptoms(symptoms.filter((s) => s !== symptom));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (symptoms.length === 0) {
      setError("Please enter at least one symptom.");
      return;
    }
    setError(null);
    setLoading(true);
    setPrediction(null);
    try {
      const response = await axios.post(
        `${BASE_URL}/symptoms`,
        { data: symptoms }
      );
      setPrediction(response.data.data);
    } catch (err) {
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={symptomInput}
            onChange={(e) => setSymptomInput(e.target.value)}
            placeholder="Enter symptom"
            className="flex-grow border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="button"
            onClick={handleAddSymptom}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
      <div className="mb-4">
        {symptoms.map((symptom) => (
          <span
            key={symptom}
            className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2 cursor-pointer"
            onClick={() => handleRemoveSymptom(symptom)}
            title="Click to remove"
          >
            {symptom} &times;
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Predicting..." : "Predict Disease"}
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {prediction && (
        <div className="mt-6 p-4 border border-green-600 rounded bg-green-50">
          <h3 className="text-xl font-semibold mb-2">
            Predicted Disease: {prediction.predicted_disease}
          </h3>
          <p><strong>Description:</strong> {prediction.dis_des}</p>
          <p><strong>Precautions:</strong> {prediction.my_precautions}</p>
          <p><strong>Medications:</strong> {prediction.medications}</p>
          <p><strong>Recommended Diet:</strong> {prediction.rec_diet}</p>
          <p><strong>Workout:</strong> {prediction.workout}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
