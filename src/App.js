import React from "react";
import axios from "axios";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme/theme";
import Router from "./components/Router";
import _unauthorised from "./components/Token/RefreshToken";
import setToken from "./components/Token/SetToken";

export default function App() {
    axios.defaults.baseURL = "http://localhost:8000";
    axios.interceptors.request.use(function (config) {
        setToken(config);
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response) {
            if (error.response.config.url === '/api/token/refresh/' || error.response.config.url === "/account/logout/") {
                return Promise.reject(error);
            } else {
                return _unauthorised(error);
            }
        }
        return Promise.reject(error);
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </div>
    );
}
