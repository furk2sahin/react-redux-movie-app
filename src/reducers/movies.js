import { FETCH_MOVIES_FULLFILLED, FETCH_MOVIES_REJECTED } from '../actions/movies'

const initialState = {
    fetchin: false,
    fetched: false,
    movies: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_FULLFILLED:
            return {
                ...state,
                movies: action.payload,
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
} 