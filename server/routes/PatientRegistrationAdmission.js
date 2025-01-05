const express = require("express");
const router = express.Router();
const PatientRegistrationAdmission = require("../schema/PatientRegistrationAdmission");

// Post route to handle patient registration
router.post("/register", async (req, res) => {
  const patientData = req.body;

  // Validate required fields
  if (
    !patientData.patientName ||
    !patientData.patientAge ||
    !patientData.patientGender ||
    !patientData.contactInfo ||
    !patientData.admissionDate ||
    !patientData.address ||
    !patientData.ward ||
    !patientData.guardianContact ||
    !patientData.medicalHistory
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Parse the admissionDate to a JavaScript Date object
    const admissionDate = new Date(patientData.admissionDate);

    // Check if admissionDate is a valid date
    if (isNaN(admissionDate.getTime())) {
      return res.status(400).json({ message: "Invalid admission date." });
    }

    // Create a new patient document with the parsed date
    const newPatient = new PatientRegistrationAdmission({
      ...patientData,
      admissionDate: admissionDate, // Use the parsed admissionDate
    });

    // Save the patient data to MongoDB
    await newPatient.save();

    // Response with success message
    res
      .status(201)
      .json({ message: "Patient registered successfully.", data: newPatient });
  } catch (err) {
    console.error("Error saving patient data:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Get route to fetch all patients
router.get("/patient", async (req, res) => {
  try {
    // Find all patient records in the database
    const patients = await PatientRegistrationAdmission.find();
    res.json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Error fetching patients." });
  }
});

module.exports = router;
