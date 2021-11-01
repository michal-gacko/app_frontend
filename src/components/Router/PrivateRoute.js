import {Redirect, Route} from "react-router-dom";
import React from "react";

export default function PrivateRoute({component: Component, ...rest}) {

return (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('access_token') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);
}
