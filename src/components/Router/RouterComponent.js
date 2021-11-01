import React from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import {Container} from  '@mui/material';

import Navigation from './Navigation';
import PrivateRoute from "./PrivateRoute";
import User from "../../sites/User";
import LoginForm from '../Templates/LoginForm';
import Footer from "../Templates/Footer/FooterComponent";
import Logout from "../../Logout";
import Homepage from "../../sites/Homepage";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Container fixed>
                    <Switch>
                        <PrivateRoute path="/" component={Homepage} exact/>
                        <PrivateRoute path="/users" component={User}/>
                        <Route path="/login" component={LoginForm}/>
                        <PrivateRoute role={["operator"]} path="/logout" component={Logout}/>
                    </Switch>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </div>
    );
}
