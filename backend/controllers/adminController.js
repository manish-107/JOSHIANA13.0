import { asyncHandler } from "../middlewares/asyncHandler.js";
import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Import bcrypt
import Registration from "../models/registerModel.js"; // Adjust the path to your model

// Fetch all participants from the database
const showAllParticipant = asyncHandler(async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json({
      message: "Participants fetched successfully",
      data: registrations,
    });
  } catch (error) {
    console.error("Error fetching participants:", error);
    res.status(500).json({
      message: "Error fetching participants",
      error: error.message,
    });
  }
});

// Generate JWT token
const generateToken = (adminId) => {
  return jwt.sign({ _id: adminId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Optional: Set the token expiration time
  });
};

// Admin login
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find admin by email
  const existingAdmin = await Admin.findOne({ email });
  if (!existingAdmin) {
    return res.status(401).json({ error: "Admin not found" });
  }

  // Compare the password
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingAdmin.password
  );
  if (!isPasswordCorrect) {
    return res.status(401).json({ error: "Invalid password" });
  }

  // Generate and send token
  const token = generateToken(existingAdmin._id);

  res.json({
    _id: existingAdmin._id,
    username: existingAdmin.username,
    email: existingAdmin.email,
    token, // Send the token back to the client
  });
});

// Admin signup
const adminSignup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if admin already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ error: "Admin already exists" });
  }

  // Create a new admin document
  const newAdmin = new Admin({
    username,
    email,
    password,
  });

  // Save the new admin document to the database
  await newAdmin.save();

  res.status(201).json({
    message: "Admin created successfully!",
    admin: {
      _id: newAdmin._id,
      username: newAdmin.username,
      email: newAdmin.email,
    },
  });
});

export { showAllParticipant, adminLogin, adminSignup };
