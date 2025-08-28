import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser())

// routes imports
import userRouter from "./routes/userRouter.js";

// routes declaration


app.use("/api/v1/users", userRouter);

export { app };
