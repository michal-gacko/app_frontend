import React from "react";
import {Box, Grid, Typography} from  '@mui/material';
import CardComponent from "../../CardComponent"
import {useStyles} from "./Style";

export default function ErrorMessage(props) {
        const classes = useStyles();

    return (
        <Box mt={2}>
            <Grid container justify="center" xs={12}>
                <Grid container justify="center" xs={6}>
                    <CardComponent
                        cardContentClass={classes.error}
                        content={<Typography className={classes.text}>{props.message}</Typography>}
                    />
                </Grid>
            </Grid>
        </Box>
    );

}

