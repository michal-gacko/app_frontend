import React from 'react';
import {Box, Typography} from  '@mui/material';
import {useStyles} from "./Style";


export default function StickyFooter() {
    const classes = useStyles();
    return (
        <Box className={classes.fab} mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {' '}
                {new Date().getFullYear()}
                {' '}
                by Scrypta, s.r.o. 3.0.0
                <br/>
                All Rights Reserved.
            </Typography>
        </Box>
    )
}
