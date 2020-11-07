import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULLFILLED = "NEW_MOVIE_FULLFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";
export function onNewMovieSubmit({ title, cover }) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(`${API_BASE}/movies`, {
                title,
                cover
            })
                .then(result => result.data.movies)
        })
    }
}