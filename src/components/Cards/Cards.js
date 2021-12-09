import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import cx from 'classnames';
import styles from './Cards.module.css';

import CountUp from 'react-countup';

 const Cards = (props) => {
    console.log(props.data);
    if(props.data===null){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justfy="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondry" gutterBottom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={props.data.confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondry" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondry" gutterBottom>Recovered</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={props.data.recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondry" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondry" gutterBottom>Deaths</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={props.data.deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondry" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default  Cards;