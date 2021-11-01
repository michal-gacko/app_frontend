import React from 'react';
import {Checkbox, FormControlLabel} from  '@mui/material';

export const CheckBoxComponent = ({name, value, onBlur, onChange, onClick, label, labelPlacement}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    id={name}
                    name={name}
                    checked={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onClick={onClick}
                />
            }
            label={label}
            labelPlacement={labelPlacement}
        />
    );
}


