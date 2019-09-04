import axios from "axios";
const APIKEY = "b4fe0c22fecb27296c885c1704957547";

function receiveMovies(movies, query) {
  return {
    type: "RECEIVEMOVIES",
    movies,
    query,
    receivedAt: Date.now()
  };
}

function errorOnReceiveMovies(errorMessage) {
  return {
    type: "ERRORONRECEIVEMOVIES",
    errorMessage
  };
}

// This data is fetched at run time on the client.
const fetchMovies = (query, dispatch) => {
  let url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    APIKEY +
    "&language=es-MX";

  console.log("query", query);
  if (query !== undefined && query != "") {
    url =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      APIKEY +
      "&query=" +
      query +
      "&language=es-MX";
  }

  axios
    .get(url)
    .then(({ data }) => {
      dispatch(receiveMovies(data, query));
    })
    .catch(error => {
      console.log(error);
      dispatch(errorOnReceiveMovies(error));
    });
};

export default function Movies(
  state = {
    loading: false,
    error: false,
    query: "",
    errorMessage: "",
    moviesResults: [],
    lastLoad: null
  },
  action
) {
  switch (action.type) {
    case "LOADMOVIES":
      console.log("action", action);
      fetchMovies(action.query, action.asyncDispatch);
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null
      };
    case "RECEIVEMOVIES":
      return {
        loading: false,
        error: false,
        errorMessage: null,
        query: action.query,
        moviesResults: action.movies.results ? action.movies.results : [],
        lastLoad: action.receivedAt
      };
    case "ERRORONRECEIVEMOVIES":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
        moviesResults: []
      };
    default:
      return state;
  }
}
