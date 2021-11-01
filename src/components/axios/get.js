import axios from 'axios';

export default async function get(url) {
    return await axios.get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error
        });
}