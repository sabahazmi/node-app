import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
const app = express();
const PORT = 5000;

app.use("/", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  console.log("TEST");
  res.send("Hello Home");
});
