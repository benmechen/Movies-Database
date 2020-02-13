import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import history from './history';
import './css/MovieDetails.css';

function MovieDetail({ movie, previous, remove, removeCurrentMovie, removePrevious }) {
    if (movie === null) {
        history.push("/")
        return  null
    }

    const { original_title, poster_path, vote_average, budget, overview, popularity } = movie;

    var url = `https://image.tmdb.org/t/p/w500${poster_path}`
    if (poster_path == null) {
        url = "https://cdn.icon-icons.com/icons2/520/PNG/512/Film_icon-icons.com_52098.png"
    }

    return (
        <div className="movie-detail">
            <img src={url} alt="" className="movie-detail-img"/>
            <h4 className="movie-detail-title">{original_title}</h4>
            <ul>
                <li><h6><b>Rating:</b> {vote_average}/10</h6></li>
                <li><h6><b>Budget:</b> {budget}</h6></li>
                <li><h6><b>Overview:</b> {overview}</h6></li>
                <li><h6><b>Popularity:</b> {popularity}</h6></li>
            </ul>
            <Link to={previous} className="movie-detail-close" onClick={() => {
                console.log(previous)
                remove()
                removeCurrentMovie()
                removePrevious()
            }}>Close</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    previous: state.previous,
    movie: state.currentMovie
});

const mapDispatchToProps = (dispatch) => ({
    remove: () => dispatch({
        type: 'REMOVE_MOVIES'
    }),
    removeCurrentMovie: () => dispatch({
        type: 'REMOVE_CURRENT_MOVIE'
    }),
    removePrevious: () => dispatch({
        type: 'REMOVE_PREVIOUS'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);