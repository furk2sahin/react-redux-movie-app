import {
    NEW_MOVIE_FULLFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE_PENDING,

    FETCH_MOVIE_FULLFILLED,
    FETCH_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING
} from '../actions/newMovie'

const initialState = {
    fetchin: false,
    done: false,
    movies: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_MOVIE_FULLFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                done: true
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        //FETCH_MOVIE

        case FETCH_MOVIE_PENDING:
            return {
                ...state,
            }
        case FETCH_MOVIE_FULLFILLED:
            return {
                ...state,
                moviee: action.payload.movie,
            }
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
} 