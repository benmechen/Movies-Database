import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './css/Movie.css';

function Movie({ movie, remove, setCurrentMovie, setPrevious }) {
    const { id, original_title, poster_path, vote_average } = movie;

    var url = `https://image.tmdb.org/t/p/w500${poster_path}`
    if (poster_path == null) {
        url = "https://cdn.icon-icons.com/icons2/520/PNG/512/Film_icon-icons.com_52098.png"
    }

    return (
        <Link to={"/movie/" + id} className="movie-container" onClick={() => {
            remove()
        }}>
            <div className="movie-container col-sm-auto movie-container-img" style={{backgroundImage: `url(${url})`}}>
                <div className="movie-popover">
                    <h4>{original_title}</h4>
                    <h6>{vote_average}/10</h6>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    remove: () => dispatch({
        type: 'REMOVE_MOVIES'
    }),
    setCurrentMovie: (value) => dispatch({
        type: 'SET_CURRENT_MOVIE',
        payload: value
    }),
    setPrevious: (value) => dispatch({
        type: 'SET_PREVIOUS',
        payload: value
    }),
  });

export default connect(null, mapDispatchToProps)(Movie);