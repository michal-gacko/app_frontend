import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from  '@mui/material';


export const AutocompleteField = ({name, multiple, optionsName, color, value, label, placeholder, onChange, onBlur, options, error, touched, helperText}) => {
    let isError = error !== undefined && touched

    return (
        <Autocomplete
            onChange={onChange}
            id={name}
            name={name}
            value={value}
            options={options}
            getOptionLabel={(option) => option[optionsName || "name"]}
            onBlur={onBlur}
            fullWidth={true}
            multiple={multiple}
            renderInput={
                (params) =>
                    <TextField
                        {...params}
                        color={color || "secondary"}
                        variant="outlined"
                        margin="normal"
                        label={label}
                        placeholder={placeholder || label}
                        error={isError}
                        helperText={isError ? error : helperText}

                    />
            }
        />
    );
}


