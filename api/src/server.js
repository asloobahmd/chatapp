import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port: ${PORT}`);
});
