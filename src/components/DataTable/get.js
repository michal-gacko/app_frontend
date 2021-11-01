import axios from 'axios';

export default function get(query, path) {
    return axios.get(path)
        .then(function (response) {
            return {
                data: response.data.results,
                page: query.page,
                totalCount: response.data.count
            };
        });
}

