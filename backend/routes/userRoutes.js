import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  emailSend,
  getUsers,
  deleteUser,
  updateUserProfile,
  getUserById,
  verificationLink,
  registerUserManually,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/verificationlink").post(verificationLink);
router.route("/register").post(registerUserManually);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

router.route("/email").post(protect, emailSend);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .put(protect, updateUserProfile)
  .get(protect, getUserById);
export default router;
