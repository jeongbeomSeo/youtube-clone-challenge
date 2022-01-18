import express from "express";
import {
  home,
  getUpload,
  postUpload,
  detail,
  getEdit,
  postEdit,
  deleteMovie,
  search,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.route("/").get(home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.route("/movies/:id([0-9a-f]{24})").get(detail);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.route("/movies/:id([0-9a-f]{24})/delete").get(deleteMovie);
movieRouter.route("/search").get(search);

export default movieRouter;
