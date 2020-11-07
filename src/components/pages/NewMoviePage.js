import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMovieForm from '../NewMovieForm'

class NewMoviePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NewMovieForm />
            </div>
        )
    }
}

const mapStateToProps = ({ newMovie }) => {
    return {
        newMovie
    }
};

export default connect()(NewMoviePage)