import Axios from 'axios';

export function call(add, url) {
    Axios.get(url)
        .then(response => {
            if (response.data.results !== undefined) {
                response.data.results.forEach(movie => {
                    add(movie)
                })
            } else if (response.data !== undefined) {
                add(response.data)
            }
        })
}

export function generateAPICall(type, value) {
    switch (type) {
        case 'UPCOMING':
            return 'https://api.themoviedb.org/3/movie/upcoming?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-US'
        case 'TOP_RATED':
            return `https://api.themoviedb.org/3/movie/top_rated?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-US&page=1`
        case 'SEARCH':
            return `https://api.themoviedb.org/3/search/movie?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-US&query=${encodeURI(value)}&page=1&include_adult=false`
        case 'MOVIE':
            return `https://api.themoviedb.org/3/movie/${value}?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-US`
        case 'SIMILAR':
            return `https://api.themoviedb.org/3/movie/${value}/similar?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-US&page=1`
        default:
            return 'https://api.themoviedb.org/3/movie/popular?api_key=855ef73742ffd4ed1d178270d2fdf2cc&language=en-GB&page=1'
    }
}