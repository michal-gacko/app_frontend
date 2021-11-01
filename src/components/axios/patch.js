import axios from 'axios';

export default function patch(data, url) {
    return axios.patch(url, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error
        });
}