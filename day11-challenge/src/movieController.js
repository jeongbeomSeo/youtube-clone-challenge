import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { pageTitle: movie.title, movie });
};

export const getAdd = (req, res) => {
  return res.render("add", { pageTitle: "Add Movie!" });
};

export const postAdd = (req, res) => {
  let { title, synopsis, genres } = req.body;
  genres = genres.split(",");
  const movie = {
    title,
    synopsis,
    genres,
  };
  addMovie(movie);
  return res.redirect("/");
};
