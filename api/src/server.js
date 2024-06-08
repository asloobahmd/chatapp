import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/user.js";

import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port: ${PORT}`);
});
