import {
    NEW_MOVIE_FULLFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE_PENDING
} from '../actions/newMovie'

const initialState = {
    fetchin: false,
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
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return state;
    }
} 