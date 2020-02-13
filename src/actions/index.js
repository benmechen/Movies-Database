export const add = (value) => {
    return {
        type: 'ADD_MOVIE',
        payload: value
    }
}
export const remove = () => {
    return {
        type: 'REMOVE_MOVIES'
    }
}

export const removeCurrentMovie = () => {
    return {
        type: 'REMOVE_CURRENT_MOVIE'
    }
}
export const toggleSearch = () => {
    return {
        type: 'TOGGLE_SEARCH'
    }
}
export const hideSearch = () => {
    return {
        type: 'HIDE_SEARCH'
    }
}