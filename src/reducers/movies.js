import {
    FETCH_MOVIES_FULLFILLED,
    FETCH_MOVIES_REJECTED,
    FETCH_MOVIES_PENDING
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
                movies: action.payload,
                fetching: false,
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return state;
    }
} 