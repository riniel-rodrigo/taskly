import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  reorderTasks,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.put("/", reorderTasks);

export default router;
