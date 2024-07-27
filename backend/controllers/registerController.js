import { asyncHandler } from "../middlewares/asyncHandler.js";
import { z } from "zod";
import Registration from "../models/registerModel.js"; // Adjust the path as necessary

const participantSchema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(1).regex(/^\d+$/),
});

const registrationSchema = z.object({
  clgName: z.string().min(1),
  email: z.string().email(),
  eventType: z.string().min(1),
  department: z.string().min(1),
  participants: z.array(participantSchema).nonempty(),
  transactionDetails: z.object({
    transactionId: z.string().min(1),
    amount: z.number().positive(),
    paymentStatus: z.string().min(1),
    paymentDate: z.string().min(1),
  }),
});

const userRegister = asyncHandler(async (req, res) => {
  // Validate the incoming request body
  const result = registrationSchema.safeParse(req.body);

  if (!result.success) {
    // If validation fails, respond with error details
    return res
      .status(400)
      .json({ error: "Invalid data", details: result.error.errors });
  }

  // Extract validated data
  const {
    clgName,
    email,
    eventType,
    department,
    participants,
    transactionDetails,
  } = result.data;

  // Check if email already exists
  const existingRegistration = await Registration.findOne({ email });

  if (existingRegistration) {
    // If email exists, respond with a conflict status
    return res.status(409).json({ error: "Email already in use" });
  }

  // Create a new registration document
  const registration = new Registration({
    clgName,
    email,
    eventType,
    department,
    participants,
    transactionDetails,
  });

  // Save the registration document to the database
  await registration.save();

  // Respond with a success message
  res.status(201).json({ message: "Registration saved successfully!" });
});

export { userRegister };
