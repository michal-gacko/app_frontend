import axios from 'axios';

export default function post(data, url) {
    return axios.post(url, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error
        });
}