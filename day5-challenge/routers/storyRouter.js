import express from "express";
import { story, editStory, deleteStory } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", story);
storyRouter.get("/:id/edit", editStory);
storyRouter.get("/:id/delete", deleteStory);

export default storyRouter;
