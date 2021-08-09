import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config"
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRouter } from "./AuthRouter";
import { AppScreen } from '../components/AppScreen';
import { login } from '../components/actions/auth';
import { Loading } from '../components/petsapp/Loading';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) =>{
            
            if(user?.uid){
                dispatch( login( user.uid , user.displayName ));
                setIsLoggedIn(true);
                
            } else {
                setIsLoggedIn(false);
            }

            setIsLoading(false);            
        })
    }, []);

    if(isLoading){
        return (
            <Loading />
        )
    }

    return (
        <div id="container-app">
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


