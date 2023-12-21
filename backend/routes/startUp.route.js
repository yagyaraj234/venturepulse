import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

import {
  registerStartup,
  getStartupList,
  searchStartups,
} from "../controllers/startup.controller.js";

router.get("/", getStartupList);

router.get("/startup-search=:key", searchStartups);

// secured routes
router.post("/register-startup", verifyJWT, registerStartup);

export default router;
