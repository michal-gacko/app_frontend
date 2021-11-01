import React from 'react';
import {Button} from  '@mui/material';

export const ButtonComponent = ({className, href, size, disabled, color, onClick, target, text, style, type, variant}) => {
    return (
        <Button
            className={className}
            onClick={onClick}
            type={type}
            color={color || "secondary"}
            variant={variant || "contained"}
            style={style}
            size={size}
            disabled={disabled}
            href={href}
            target={target}
        >
            {text}
        </Button>
    );
}


