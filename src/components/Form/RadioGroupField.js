import React from 'react';
import {FormLabel, FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material';
// import FormControl from '@mui/material';
// import FormControlLabel from '@mui/material';
// import Radio from '@mui/material';
// import RadioGroup from '@mui/material';

export const RadioGroupField = ({label, name, onChange, touched, error, value}) => {
    let isError = error !== undefined && touched

    return (
        <div>
            <FormControl component="fieldset" error={isError}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <FormControlLabel value={"true"} control={<Radio/>} label="Áno"/>
                    <FormControlLabel value={"false"} control={<Radio/>} label="Nie"/>
                </RadioGroup>
            </FormControl>
        </div>


    );
}
