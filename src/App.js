import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import MoviesContainer from './components/MoviesContainer';
import Header from './components/Header';
import Search from './components/Search';
import {call, generateAPICall} from './API.js';
import history from './components/history';
import './App.css';

function App({add}) {

  return (
    <div className="App">
      <Router history={history}>
        <Header/>
        <Search/>

        <Switch>
          <Route path="/upcoming" render={() => {
            call(add, generateAPICall('UPCOMING', null))
          }}/>
          <Route path="/toprated" render={() => {
            call(add, generateAPICall('TOP_RATED', null))
          }}/>
          <Route path="/search/:term" render={(value) => {
            console.log(value.match.params.term)
            call(add, generateAPICall('SEARCH', value.match.params.term))
          }}/>
          <Route path="/movie/:id" render={(value) => {
            console.log(value.match.params.id)
            call(add, generateAPICall('MOVIE', value.match.params.id))
          }}/>
          <Route path="*" render={() => {
            call(add, generateAPICall('POPULAR', null))
          }}/>
        </Switch>

        <MoviesContainer/>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  add: (movie) => dispatch({
      type: 'ADD_MOVIE',
      payload: movie
  })
});

export default connect(null, mapDispatchToProps)(App);
