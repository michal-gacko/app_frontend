import * as Yup from 'yup';

export const ValidationSchema = () => {
    return Yup.object().shape({
        username: Yup.string()
            .required('Užívateľské meno je povinné.'),
        password: Yup.string()
            .required('Heslo je povinné.'),
    });
}