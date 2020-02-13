import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = ({onClick, remove, hideSearch}) => {
    return (
        <header className="header">
            <button className="search-button" onClick={onClick}></button>
            <Link to="/" onClick={() => {
                remove()
                hideSearch()
            }}><h1>MOVIES</h1></Link>

            <ul>
                <li>
                    <Link to="/popular" className="header-link" onClick={() => {
                        remove()
                        hideSearch()
                    }}><h4>Popular</h4></Link>
                </li>
                <li>
                    <Link to="/toprated" className="header-link" onClick={() => {
                        remove()
                        hideSearch()
                    }}><h4>Top Rated</h4></Link>
                </li>
                <li>
                    <Link to="/upcoming" className="header-link" onClick={() => {
                        remove()
                        hideSearch()
                    }}><h4>Upcoming</h4></Link>
                </li>
            </ul>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({
        type: 'TOGGLE_SEARCH'
    }),
    hideSearch: () => dispatch({
        type: 'HIDE_SEARCH'
    }),
    remove: () => dispatch({
        type: 'REMOVE_MOVIES'
    })
});
  
export default connect(null, mapDispatchToProps)(Header);