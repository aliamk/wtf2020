import React from 'react';
import { Grid } from '@material-ui/core'
import useStyles from './charts.styles'

import Chart from './Chart/Chart'

const charts = [
    { id: 1, name: 'Timeline', description: '2020 Timeline' },
    { id: 2, name: 'Barchart', description: 'Deaths' }
]

const Charts = () => {

    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {charts.map((chart) => (
                    <Grid item key={chart.id} xs={12} sm={6} lg={3} >
                        <Chart chart={chart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Charts