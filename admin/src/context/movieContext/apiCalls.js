import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies/", movie, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movie/" + id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
