import React from "react";
import {Box, Grid} from '@material-ui/core';
import ErrorMessage from "../Templates/ErrorMessage";

export default function DataTableErrorMessage(props) {
    let resultMessages = ""
    if (props.message && props.message.response && props.message.response.status === 400) {
        resultMessages = Object.entries(props.message.response.data).map((validationError, item) => {
            return validationError[1][0];
        })

        return (
            <Box mt={2}>
                <Grid container justify="center" xs={12}>
                    <Grid container justify="center" xs={6}>
                        <ErrorMessage
                            message={resultMessages}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
    return ("");
}

