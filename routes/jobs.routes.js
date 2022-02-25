import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from "../controller/job.controller.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
//remenber about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router