import "dotenv/config";
import express from "express";
import http from "node:http";
import { authRouter, linkRouter } from "./routes";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use(authRouter);
app.use(linkRouter);

http.createServer(app).listen(PORT, () => {
  console.log(`app online at port ${PORT}`);
});
