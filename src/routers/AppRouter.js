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


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) =>{
            
            if(user?.uid){
                dispatch( login( user.uid , user.displayName ));
                setIsLoggedIn(true);

                // dispatch( startLoadingPets(user.uid) );
               
            } else {
                setIsLoggedIn(false);
            }

            setIsLoading(false);            
        })
    }, []);

    if(isLoading){
        return (
            <h1>Espere por favor...</h1>
        )
    }

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


