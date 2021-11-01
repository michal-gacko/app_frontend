import {TextField} from '@mui/material';
import React from 'react';

export const InputField = ({style, helperText, variant, ref, id, size, color, autoComplete, autoFocus, required, label, fullWidth, error, touched, disable, name, placeholder, onChange, onBlur, type, value, validate, InputLabelProps, defaultValue, format, InputProps}) => {
    let isError = error !== undefined && touched
    return (
        <TextField
            style={style}
            ref={ref}
            id={id || name}
            name={name}
            type={type}
            label={label}
            placeholder={placeholder || label}
            disabled={disable}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            validate={validate}
            error={isError}
            helperText={isError ? error : helperText}
            InputLabelProps={InputLabelProps}
            defaultValue={defaultValue}
            format={format}
            InputProps={InputProps}
            margin="normal"
            variant={variant || "outlined"}
            color={color || "secondary"}
            required={required}
            autoFocus={autoFocus}
            fullWidth={fullWidth}
            autoComplete={autoComplete}
            size={size}
        />
    );
}
