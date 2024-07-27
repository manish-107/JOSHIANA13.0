import { asyncHandler } from "../middlewares/asyncHandler.js";
import Registration from "../models/registerModel.js"; // Adjust the path to your model

const showAllParticipant = asyncHandler(async (req, res) => {
  try {
    // Fetch all participants from the database
    const registrations = await Registration.find();

    // Extract participants from the registrations
    // const participants = registrations.flatMap(
    //   (registration) => registration.participants
    // );

    // Respond with the list of participants

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

export { showAllParticipant };
