import React from 'react'
import { connect } from "react-redux";
import history from './history';
import './css/Search.css';

function Search({showSearch, setSearchValue, remove}) {
    return showSearch ? (
        <header className="search">
            <form action="/search" method="get" onSubmit={e => {
                e.preventDefault()
                remove();
                history.push(`/search/${e.target.querySelector('input').value}`)
            }}>
                <input type="text" name="value" placeholder="Search..."/>
                <input type="submit" value="Search"/>
            </form>
        </header>
    ) : null
}

const mapStateToProps = (state) => ({
    showSearch: state.showSearch
});

const mapDispatchToProps = (dispatch) => ({
    setSearchValue: (value) => dispatch({
        type: 'SET_SEARCH_VALUE',
        payload: value
    }),
    remove: () => dispatch({
        type: 'REMOVE_MOVIES'
    })
  });

export default connect(mapStateToProps, mapDispatchToProps)(Search);
