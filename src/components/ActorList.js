import React from 'react'
import PropTypes from 'prop-types'
import { Card, Grid } from 'semantic-ui-react'
const ActorList = props => {
    return (
        <Grid stackable columns={3}>
            {props.actors.map((actor, key) => (
                <Grid.Column key={key}>
                    <Card
                        image={actor.photo}
                        header={actor.name}
                        extra={actor.description} />
                </Grid.Column>))
            }
        </Grid>
    )
}

ActorList.propTypes = {
    actors: PropTypes.array.isRequired
}

export default ActorList