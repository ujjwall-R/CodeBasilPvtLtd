import express from "express";
import "./db/mongoose.js";
import userRouter from "./routers/user.js";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
// console.log(__dirname);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

import cors from "cors";
// import { connect } from "mongoose";
import connectDB from "./db/mongoose.js";

connectDB();

app.use(cors());

app.use(userRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../frontend/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is on port", port);
});
