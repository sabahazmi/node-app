import express, { application } from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  res.send("Users!");
});

export default router;
