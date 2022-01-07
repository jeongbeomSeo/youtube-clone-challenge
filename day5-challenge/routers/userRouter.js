import express from "express";
import { user, editProfile, userProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", user);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id", userProfile);

export default userRouter;
