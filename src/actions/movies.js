import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES_FULLFILLED = "FETCH_MOVIES_FULLFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";
export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get(`${API_BASE}/movies`)
                .then(result => result.data.movies)
        })
    }
}