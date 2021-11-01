import React from "react";
import {Drawer} from  '@mui/material';
import {useStyles} from "./Style"
import ListComponent from "./List";

export default function DrawerComponent(props) {
    const classes = useStyles();
    return (
        <Drawer open={props.left} onClose={props.toggleDrawerHandler}>
            <div
                className={classes.list}
                role="presentation"
                onClick={props.toggleDrawerHandler}
                onKeyDown={props.toggleDrawerHandler}
            >
                <ListComponent
                    className={classes.linkto}
                    to="/students"
                    primary="Študenti"
                    logged={true}
                />
                <ListComponent
                    className={classes.linkto}
                    to="/login"
                    primary="Prihlásenie"
                    logout={true}
                />
                <ListComponent
                    className={classes.linkto}
                    to="/logout"
                    primary="Odhlásenie"
                    roles={["operator"]}
                    logged={true}
                />
            </div>
        </Drawer>
    );
}

