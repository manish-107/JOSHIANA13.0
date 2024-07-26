import { asyncHandler } from "../middlewares/asyncHandler.js";

const showAllParticipant = asyncHandler(async (req, res) => {
  console.log("showAllParticipant");
  res.json({
    msg: "hello",
  });
});

export { showAllParticipant };
