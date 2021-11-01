import {List, ListItem, ListItemText} from  '@mui/material';
import {Link} from "react-router-dom";
import React from "react";

export default function ListComponent(props) {
    function logged() {
        return localStorage.getItem('access_token')

    }

    function access() {
        if(props.logout){
            return !localStorage.getItem('access_token')
        }
        return props.logged ? logged()  : true
    }

    if (access()) {
        return (
            <List>
                <ListItem button key={props.key}>
                    <Link className={props.className} to={props.to}>
                        <ListItemText primary={props.primary}/>
                    </Link>
                </ListItem>
            </List>
        );
    }
    return "";
}