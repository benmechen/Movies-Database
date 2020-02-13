import React from 'react'
import { connect } from "react-redux";
import './css/MoviesContainer.css';
import Movie from './Movie';
import history from './history';
import MovieDetail from './MovieDetail';

const MoviesContainer = ({ movies, setCurrentMovie, setPrevious }) => (
    <div className="container">
        <div className="row">
            {generateMovies(movies, setCurrentMovie, setPrevious)}
        </div>
    </div>
);

const generateMovies = (movies, setCurrentMovie, setPrevious) => {
    var items = []
    if (movies.length > 1) {
        movies.forEach(movie => {
            items.push(<Movie movie={movie} />)
        }) 
    } else if (movies.length === 1) {
        setCurrentMovie(movies[0])
        items.push(<MovieDetail/>)
    }

    return items
}

const mapStateToProps = state => {
    return { movies: state.movies };
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentMovie: (value) => dispatch({
        type: 'SET_CURRENT_MOVIE',
        payload: value
    }),
    setPrevious: (value) => dispatch({
        type: 'SET_PREVIOUS',
        payload: value
    }),
  });

const Container = connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

export default Container;