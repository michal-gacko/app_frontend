import React from "react";
import {Hidden} from '@material-ui/core';
import ErrorMessage from "../ErrorMessage";

export default function LoginErrorMessage(props) {

    return (
        <Hidden smUp={props.access}>
            <ErrorMessage
                message={"Zle prihlasovacie meno alebo heslo."}
            />
        </Hidden>
    );

}

