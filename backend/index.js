import express from "express";
import helmet from "helmet";
import expressSanitizer from "express-sanitizer";
import cors from "cors";
import { dbConnect } from "./dbconfig/db.js";
import registerRoute from "./routes/registerRoute.js";
import adminRoute from "./routes/adminRoute.js";
import dotenv from "dotenv";

dotenv.config();

// Connect to the database
dbConnect();

const app = express();

// Parsing JSON body input
app.use(express.json());

// Security HTTP headers
app.use(helmet());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Sanitize user input (XSS Cross-Site Scripting)
app.use(expressSanitizer());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Register routes
app.use("/api/v1/users", registerRoute);
app.use("/api/v1/admin", adminRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
