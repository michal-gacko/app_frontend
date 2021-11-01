export default function notEmpty(data) {
    return data === undefined || data === "" ?  { isValid: false, helperText: 'Pole je povinné.' } : true
}

