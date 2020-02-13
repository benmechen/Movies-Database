const initialState = {
    movies: [],
    showSearch: false,
    currentMovie: null,
    previous: "/"
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return Object.assign({}, state, {
                movies: state.movies.concat(action.payload),
                showSearch: state.showSearch,
                currentMovie: state.currentMovie,
                previous: state.previous
            });
        case 'REMOVE_MOVIES':
            return Object.assign({}, state, {
                movies: [],
                showSearch: state.showSearch,
                currentMovie: state.currentMovie,
                previous: state.previous
            });
        case 'SET_CURRENT_MOVIE':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: state.showSearch,
                currentMovie: action.payload,
                previous: state.previous
            }); 
        case 'REMOVE_CURRENT_MOVIE':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: state.showSearch,
                currentMovie: null,
                previous: state.previous
            }); 
        case 'SET_PREVIOUS':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: state.showSearch,
                currentMovie: state.currentMovie,
                previous: action.payload
            }); 
        case 'REMOVE_PREVIOUS':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: state.showSearch,
                currentMovie: state.currentMovie,
                previous: "/"
            });  
        case 'TOGGLE_SEARCH':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: !state.showSearch,
                currentMovie: state.currentMovie,
                previous: state.previous
            });
        case 'HIDE_SEARCH':
            return Object.assign({}, state, {
                movies: state.movies,
                showSearch: false,
                currentMovie: state.currentMovie,
                previous: state.previous
            });
        default:
            return state;
    }
}

export default rootReducer;