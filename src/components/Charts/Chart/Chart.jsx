import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Link } from '@material-ui/core'
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
// import Timeline from '../../assets/timeline.jpg'
import useStyles from './chart.styles'

const Chart = ({ chart }) => {

    const classes = useStyles()

    return (
        <Card className="classes.root" >
            <CardMedia className={classes.media} title={chart.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography component={Link} to="/" variant="h5" gutterBottom>
                        {chart.name}
                    </Typography>
                    {/* <Typography variant="h5">
                        {chart.name}
                    </Typography> */}
                </div>
                <Typography variant="body2" color="textSecondary">{chart.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton component={Link} to="/" aria-label="See Chart">
                    <TimelineRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Chart
