import React from "react";
import {Box, Card, CardContent, Grid, Typography} from '@material-ui/core';
import {useStyles} from "./Style";

export default function HeaderMessage(props) {
    const classes = useStyles();
    let className = ""
    let resultMessages = ""
    if (props.message && props.message.response && props.message.response.status === 400) {
        resultMessages = Object.entries(props.message.response.data).map((validationError, item) => {
            className = classes.error
            return (<Typography className={classes.text}>{validationError[1][0]}</Typography>);
        })

        return (
            <Box mt={2}>
                <Grid container justify="center" xs={12}>
                    <Grid container justify="center" xs={6}>
                        <Card>
                            <CardContent className={className}>
                                {resultMessages}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        );
    }
    return ("");
}

