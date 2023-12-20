import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

// secured routes
router.post("/logout", verifyJWT, logoutUser);

export default router;
