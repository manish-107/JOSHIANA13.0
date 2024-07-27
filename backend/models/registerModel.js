import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const regSchema = new mongoose.Schema({
  clgName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  participants: {
    type: [participantSchema],
    required: true,
  },
  transactionDetails: {
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
  },
});

export default mongoose.model("Registration", regSchema);
