import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create task
router.post("/task", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// Get all tasks
router.get("/task", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update task
router.put("/task/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete task
router.delete("/task/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
