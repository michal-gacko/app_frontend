import React from 'react';
import {FormControlLabel, TextareaAutosize} from  '@mui/material';
import {useStyles} from "./Style"

const TextAreaField = ({name, value, error, touched, onChange, onBlur, style, className, fullWidth, label, placeholder}) => {
    let isError = error !== undefined && touched;
    const classes = useStyles();

    return (
        <FormControlLabel
            control={
                <TextareaAutosize
                    error={isError}
                    helperText={isError ? error : ""}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    rowsMin={5}
                    touched={touched}
                    value={value}
                    fullWidth={fullWidth}
                    className={className || classes.root}
                    placeholder={placeholder || label}
                />
            }
            label={label}
            labelPlacement="top"
            style={style || {width: "100%"}}
        />


    );
}


export default TextAreaField;
