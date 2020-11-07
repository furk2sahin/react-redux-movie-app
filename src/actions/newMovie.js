import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULLFILLED = "NEW_MOVIE_FULLFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULLFILLED = "FETCH_MOVIE_FULLFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

export function onNewMovieSubmit({ title, cover }) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(`${API_BASE}/movies`, {
                title,
                cover
            })
        })
    }
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOIE",
            payload: axios.get(`${API_BASE}/movies/${id}`)
                .then(result => result.data)
        })
    }
}