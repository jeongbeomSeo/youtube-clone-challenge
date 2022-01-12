import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  const title = movie.title;
  const description = movie.description_full;
  const genres = movie.genres;
  return res.render("movie", { pageTitle: title, description, genres });
};
export const filterMovie = (req, res) => {
  let movies = [];
  let title = "";
  const year = req.query.year;
  const rating = req.query.rating;
  if (year !== "" && rating !== "") {
    const yearMovies = getMovieByMinimumYear(year);
    const ratingMovies = getMovieByMinimumRating(rating);
    for (const movie of yearMovies) {
      if (ratingMovies.includes(movie)) movies.push(movie);
    }
    title = `Searching by year: ${year} and rating: ${rating}`;
  } else if (year !== "") {
    movies = getMovieByMinimumYear(year);
    title = `Searching by year: ${year}`;
  } else if (rating !== "") {
    movies = getMovieByMinimumRating(rating);
    title = `Searching by rating: ${rating}`;
  } else {
    return res.redirect("/");
  }
  return res.render("filter", { pageTitle: title, movies });
};
