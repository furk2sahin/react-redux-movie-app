import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';

import { fetchMovies, deleteMovie } from '../../actions/movies';

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired,
        deleteMovie: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                <MoviesList
                    deleteMovie={this.props.deleteMovie}
                    movies={this.props.movies} />
            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};

const mapDispathToProps = {
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps, mapDispathToProps)(MoviesPage);