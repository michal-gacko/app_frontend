import {UnauthorizedRoutes} from './UnauthorizedRoutes';

export default function setToken(config) {
    if (config.url) {
        let url = config.url.split("?");
        if (url) {
            if (!(url[0] in UnauthorizedRoutes && UnauthorizedRoutes[url[0]] === config.method)) {
                config.headers['Authorization'] = "Bearer " + localStorage.getItem('access_token');
            }
        }
    }
}