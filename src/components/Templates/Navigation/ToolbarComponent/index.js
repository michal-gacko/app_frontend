import React from "react";
import {AppBar, IconButton, Toolbar,} from  '@mui/material';
import MenuIcon from "@material-ui/icons/Menu";

export default function ToolbarComponent(props) {
    return (
        <div>
            <AppBar
                position="static"
                color="primary"
            >
                <Toolbar color="primary">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.openDrawerHandler}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div>
                        <IconButton style={{color: "white"}} aria-label="show 4 new mails" color="inherit">
                            {localStorage.getItem("username") ? localStorage.getItem("username") : null}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

