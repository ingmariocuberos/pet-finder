import React from 'react';
import {
    Link
  } from "react-router-dom";
import { useDispatch } from "react-redux";
import v from "validator";
import {  } from "module";
import { useForm } from '../../hooks/useForm';
import { registerWithEmailAndPassword } from '../actions/auth';
import { removeError, setError } from '../actions/error';


export const RegisterScreen = () => {

    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: '',
    };

    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { name, email, password, password2 } = formValues;

    const validationRegister = (name, email, password, password2) =>{

        if( v.isEmpty(name)){
            dispatch(setError('Debe ingresar un nombre'));
            return false;
        } else if( v.escape(name).includes(";") ){
            dispatch(setError('Ingrese un nombre válido'))
            return false;
        } else if( !v.isEmail(email) ){
            dispatch(setError('Ingrese un email válido'));
            return false;
        } else if( password !== password2 || password.length < 5 ){
            dispatch(setError('Passwords incorrectos'));
            return false;
        }
    
        dispatch(removeError());
    
        return true;
    }

    const handleRegister = (e) =>{

        e.preventDefault();

        const vRegister = validationRegister(name, email, password, password2);

        if( vRegister ){
            dispatch(registerWithEmailAndPassword(email, password, name));
        }
    }



    

    return (
        <form 
            className="auth__login-container"
            onSubmit={ handleRegister }>
            <Link to="./" className="auth__go-before"><i className="fas fa-times"></i></Link>
            <img 
                src="./assets/svgs/cute-cat2.svg" 
                className="auth__cat-logo" 
                alt="cute-dog"/>
            <h1 className="auth__title">Deja tu Huella</h1>
            <label className="auth__label-register" htmlFor="nombre">Nombre</label>
            <input 
                className="input d-block auth__input" 
                id="nombre"
                name="name"
                type="text"
                value={ name }
                onChange={ handleInputChange }
                autoComplete="off"/>
            <label className="auth__label-register" htmlFor="email">Email</label>
            <input 
                className="input d-block auth__input" 
                id="email"
                name="email"
                type="email"
                value={ email }
                onChange={ handleInputChange }
                autoComplete="off"/>   
            <label className="auth__label-register" htmlFor="password">Password</label>
            <input 
                className="input d-block auth__input" 
                id="password"
                name="password"
                type="password"
                value={ password }
                onChange={ handleInputChange }
                autoComplete="off"/>             
            <label className="auth__label-register" htmlFor="password2">Confirm password</label>
            <input 
                className="input d-block auth__input"
                id="password2"
                name="password2"
                type="password"
                value={ password2 }
                onChange={ handleInputChange }
                autoComplete="off"/>
            <button 
                type="submit" 
                className="button d-block auth__btn-register"
                >
                Registrate
            </button>
            <p className="d-block mt-2">¿Ya estás registrado? <Link to="./login" className="link">Inicia sesión</Link></p>
        </form>
    )
}
