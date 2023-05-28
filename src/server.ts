import mongoose from "mongoose";

const express: any = require("express");
const app: any = express();
const port: number = 5000;
const cors: any = require("cors");

app.use(cors());

app.get("/", (req: any, res: any) => {
  // Send a response to the browser
  res.send("Hello World!");
});

app.listen(port, () => {
  // Log a message to the terminal
  console.log(`Example app listening on port ${port}`);
});

