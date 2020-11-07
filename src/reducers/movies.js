import {
    FETCH_MOVIES_FULLFILLED,
    FETCH_MOVIES_REJECTED,
    FETCH_MOVIES_PENDING,

    DELETE_MOVIE_FULLFILLED,
    DELETE_MOVIE_REJECTED,
    DELETE_MOVIE_PENDING
} from '../actions/movies'

const initialState = {
    fetchin: false,
    movies: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_MOVIES_FULLFILLED:
            return {
                ...state,
                moviesList: action.payload,
                fetching: false,
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        // DELETE_MOVIE

        case DELETE_MOVIE_PENDING:
            return {
                ...state,
            }
        case DELETE_MOVIE_FULLFILLED:
            return {
                ...state,
                movies: state.movieList.filter(item => item._id !== action.payload.id),
            }
        case DELETE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
} 