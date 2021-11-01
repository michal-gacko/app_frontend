import React from 'react';
import {FormControl, InputLabel, NativeSelect, Typography} from '@mui/material';


export const SelectFiled = ({label, name, error, touched,helperText, fullWidth, options, color, value, onChange, onBlur, variant, style, className}) => {
    let isError = error !== undefined && touched
    return (
        <FormControl color="secondary" variant={variant}>
            <InputLabel>{label}</InputLabel>
            <NativeSelect
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                color={color || "secondary"}
                style={style}
                className={className}
                fullWidth={fullWidth}
                error={isError}
            >
                {Object.entries(options).map((item, index) =>
                    <option
                        value={item[0]}
                        key={item[0]}
                    >
                        {item[1]}
                    </option>
                )}
            </NativeSelect>
            <Typography style={{color:"red"}} >    {isError ? error : helperText}</Typography>
        </FormControl>
    );
}


