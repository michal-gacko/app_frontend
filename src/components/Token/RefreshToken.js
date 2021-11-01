import axios from "axios";
import Logout from "./Logout";

let isRefreshing = false
let refreshHook = Promise.resolve(null)

async function getRefreshToken() {
    const token = await axios.post('/api/token/refresh/', {
        "refresh": localStorage.getItem('refresh_token')
    }).then((response) => {
        isRefreshing = false
        return response;
    }).catch(function (error) {
        isRefreshing = false
        return error
    });
    return token;
}

export default async function _unauthorised(error) {
    if (!error.response || error.response.status !== 401) {
        return Promise.reject(error);
    }
    if (!isRefreshing) {
        refreshHook = getRefreshToken();
        isRefreshing = true
    }
    const token = await refreshHook

    if (token.data) {
        localStorage.setItem('access_token', token.data.access);
        return Promise.resolve(await axios.request(error.config))
    } else {
        Logout()
    }
}