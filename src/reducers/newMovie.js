import {
    NEW_MOVIE_FULLFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE_PENDING,

    FETCH_MOVIE_FULLFILLED,
    FETCH_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING,

    UPDATE_MOVIE_FULLFILLED,
    UPDATE_MOVIE_REJECTED,
    UPDATE_MOVIE_PENDING
} from '../actions/newMovie'

const initialState = {
    fetchin: false,
    done: false,
    movies: {
        fetching: false
    },
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                done: false
            }
        case NEW_MOVIE_FULLFILLED:
            return {
                ...state,
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
                movie: { fetching: true }
            }
        case FETCH_MOVIE_FULLFILLED:
            return {
                ...state,
                movie: {
                    ...action.payload.movie,
                    fetching: false
                }
            }
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                movie: { fetching: false }
            }

        // UPDATE_MOVIE

        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                done: false
            }
        case UPDATE_MOVIE_FULLFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return state;
    }
} 