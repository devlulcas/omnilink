import "dotenv/config";

import express from "express";

import http from "node:http";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.get("/", (req, res) => {
  res.send({
    hello: "world again",
  });
});

http.createServer(app).listen(PORT, () => {
  console.log(`app online at port ${PORT}`);
});
