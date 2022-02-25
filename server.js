import cors from "cors";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

//db and authenticate
import connectDB from "./db/connect.js";

//routes
import authRouter from "./routes/auth.routes.js";
import jobsRouter from "./routes/jobs.routes.js";

//middleware
import errorHandlerMiddleware from "./middleware/error.handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//config white list
// import { corsOptions } from "./config/cors.js";
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.send({ msg: "API" });
});

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

//middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(
      process.env.MONGO_URL
        ? process.env.MONGO_URL
        : process.env.MONGO_URL_LOCAL
    );
    console.log(
      process.env.MONGO_URL
        ? `Connect with mongodb at ${process.env.MONGO_URL}`
        : `Connect with db localhost at ${process.env.MONGO_URL_LOCAL}`
    );
    app.listen(port, () =>
      console.log(
        `Server is listening on port ${port}... http://localhost:${port}/`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
