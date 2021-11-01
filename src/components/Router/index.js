import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@mui/material";

import PrivateRoute from "./PrivateRoute";
import Navigation from '../Templates/Navigation';
import LoginForm from '../Templates/LoginForm';
import Footer from "../Templates/FooterMy";
import Logout from "../Token/Logout";
import User from "../../sites/User";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Container fixed>
                    <Switch>
                        <Route path="/login" component={LoginForm}/>
                        <PrivateRoute path="/users" component={User}/>
                        <PrivateRoute path="/logout" component={Logout}/>
                    </Switch>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </div>
    );
}
