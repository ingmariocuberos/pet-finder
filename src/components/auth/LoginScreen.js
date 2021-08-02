import React from 'react';
import { useDispatch } from "react-redux";
import v from "validator";
import {
    Link
  } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { login, loginWithEmailAndPassWord, startGoogleLogin } from '../actions/auth';
import { removeError, setError } from '../actions/error';

export const LoginScreen = () => {

    const initialForm = {
        email: '',
        password: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const { email, password } = formValues; 
    
    const dispatch = useDispatch();

    const valida = ( email, password ) =>{

        if( !v.isEmail(email)){
            dispatch( setError( 'Email incorrecto' ) );
            return false;
        } else if( v.isEmpty(password) ){
            dispatch( setError( 'Password incorrecto' ) );
            return false;
        }

        dispatch( removeError());
        return true;
    }

    const handleLogin = (e) =>{

        e.preventDefault();

        if( valida(email, password) ){
            dispatch( loginWithEmailAndPassWord( email, password ));
        } 

    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }

    return (
        <form 
            className="auth__login-container"
            onSubmit={ handleLogin }>
            <Link to="./" className="auth__go-before"><i className="fas fa-times"></i></Link>
            <img 
                src="./assets/svgs/cute-cat2.svg" 
                className="auth__cat-logo" 
                alt="cute-dog"/>
            <h1 className="auth__title">Deja tu Huella</h1>
            <p className="d-block">¿No tienes una cuenta? <Link to="./register" className="link">Registrate</Link></p>
            <label className="auth__label" htmlFor="email">Email</label>
            <input 
                className="input d-block auth__input" 
                id="email"
                name="email"
                value={ email }
                onChange={ handleInputChange }
                type="email"/>            
            <label className="auth__label" htmlFor="password">Password</label>
            <input 
                className="input d-block auth__input"
                id="password" 
                name="password"
                value={ password }
                onChange={ handleInputChange }
                type="password"/>
            <button 
                type="submit" 
                className="button d-block auth__btn-login"
                >
                Iniciar Sesión
            </button>
            <span className="d-block mt-3">o ingresa con:</span>
                <div 
                    className="d-block mt-2"
                    onClick={ handleGoogleLogin }>
                    <div 
                        className="google-btn"
                        // onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
        </form>
    )
}
