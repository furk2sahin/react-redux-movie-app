import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const extra = (
    <div className="ui two buttons">
        <Button animated>
            <Button.Content visible>Edit</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>
        <Button animated='vertical'>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='trash' />
            </Button.Content>
        </Button>
    </div>
)

const MovieCard = ({ movie }) => (
    <Grid.Column>
        <Card
            image={movie.cover}
            header={movie.title}
            extra={extra} />
    </Grid.Column>
);

export default MovieCard