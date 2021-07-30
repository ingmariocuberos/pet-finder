import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

export const PublicRoute = ({
    isAutenticated,
    component:Component,
    ...rest
}) => {
    
    return (
        <Route {...rest} isAutenticated={ isAutenticated } component={ (props)=>(
            isAutenticated
            ?
            <Redirect to="/app" />            
            :
            <Component {...props} />            
        ) } />

    )
}
