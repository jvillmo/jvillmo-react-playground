import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CounterWithHooks from "./CounterWithHooks";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    query: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    if (!this.props.movies || this.props.movies.moviesResults.length == 0) {
      this.props.loadMovies();
    } else {
      this.setState({
        query: this.props.movies.query
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
  }

  LookupForMovies = () => {
    let d = this.props.loadMovies(this.state.query);
    console.log(d);
  };

  render() {
    const { movies } = this.props;
    // console.log("render MoviesList", this.props);
    return (
      <>
        <input
          type="text"
          value={this.state.query}
          onKeyPress={event => {
            if (event.charCode == 13) {
              this.LookupForMovies();
            }
          }}
          onChange={event => {
            this.setState({ query: event.target.value });
          }}
          placeholder="Ingrese aqui la película que desea buscar"
        />
        <CounterWithHooks />

        <button variant="primary" onClick={this.LookupForMovies}>
          Load Movies
        </button>

        {movies.moviesResults.length > 0 ? (
          <>
            <>
              {movies.query ? (
                <h1>Resultados para la busqueda {movies.query}</h1>
              ) : (
                <h1>Hoy en Cartelera</h1>
              )}
            </>

            <ul>
              {movies.moviesResults.map((movie, i) => (
                <li key={movie.id}>
                  <img
                    src={"https://image.tmdb.org/t/p/w154/" + movie.poster_path}
                    alt={movie.title}
                  />
                  <a to={"/play/player/" + movie.id}>{movie.title}</a>
                </li>
              ))}
            </ul>
            <span>Última actualizacion: {movies.lastLoad}</span>
          </>
        ) : (
          <>
            <h1>SIN RESULTADOS</h1>
            {movies.error ? <h1>{movies.errorMessage.message}</h1> : null}
          </>
        )}
      </>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  loadMovies: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: query => {
      dispatch({ type: `LOADMOVIES`, query });
    }
  };
};

const ConnectedMoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);

export default ConnectedMoviesList;
