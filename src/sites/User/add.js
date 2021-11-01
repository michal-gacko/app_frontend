import axios from 'axios';

export default function add(newData, props) {
    return axios.post(props.url, newData)
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch(function (error) {
            console.log(error)
            return error
        });
    ;
}