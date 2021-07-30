import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRouter } from "./AuthRouter";
import { AppScreen } from '../components/AppScreen';


export const AppRouter = () => {

    const isLoggedIn =true;

    return (
        <div>
            <Router>
                <div>
                    <Switch>

                        <PrivateRoute isAutenticated={ isLoggedIn } exact path="/app" component={ AppScreen }/>

                        <PublicRoute isAutenticated={ isLoggedIn } path='/' component={ AuthRouter }/>

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}


