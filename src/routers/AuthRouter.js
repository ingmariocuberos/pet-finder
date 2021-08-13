import React from 'react';
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { LandingScreen } from '../components/landing/LandingScreen';

export const AuthRouter = () => {

    return (
        <>
            <div className="auth__main">
                <div className="auth__box-container">
                    <Switch>

                        <Route exact path='/index' component={ LandingScreen } />

                        <Route exact path='/login' component={ LoginScreen } />

                        <Route exact path='/register' component={ RegisterScreen } />

                        <Redirect to="/index"/>
                    </Switch>
                </div>            
            </div>
        </>
    )
}
