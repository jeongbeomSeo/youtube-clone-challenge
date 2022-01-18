import mongoose from "mongoose";

// Create a Movie Model here.
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: [{ type: String, required: true }],
});
