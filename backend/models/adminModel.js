import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the admin schema
const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Add timestamps to track when documents are created or updated

// Middleware to hash the password before saving
adminSchema.pre("save", async function (next) {
  const admin = this;

  // Hash the password only if it has been modified or is new
  if (!admin.isModified("password")) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(admin.password, salt);
    // Replace the plain text password with the hashed password
    admin.password = hashedPassword;

    next(); // Proceed to the next middleware or save the document
  } catch (error) {
    return next(error); // Pass the error to the next middleware (error handler)
  }
});

// Create and export the admin model
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
