import "dotenv/config";
import express from "express";
import http from "node:http";
import { errorHandler } from "./middlewares/error";
import { authRouter, linkRouter } from "./routes";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT ?? 8080;

const app = express();

// Pré routing
app.use(cookieParser());

app.use(authRouter);
app.use(linkRouter);

// Pós routing
app.use(errorHandler);

http.createServer(app).listen(PORT, () => {
  console.log(`app online at port ${PORT}`);
});
