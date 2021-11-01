import React from "react";
import {Redirect} from "react-router-dom";

export default function Logout() {
    if (localStorage.getItem("username")) {
        localStorage.removeItem("username")
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        window.location.reload();
    }

    return (
        <Redirect to="/"/>
    );
}


