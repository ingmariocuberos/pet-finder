import React, { useRef } from 'react';
import { useSelector } from "react-redux";

export const NavApp = ({ screenActive, setScreenActive}) => {

    const refUpload = useRef(null);
    const refConfig = useRef(null);
    const { initialStatus } = useSelector( state => state.app );

    const handleClickUpload = () =>{
    
        screenActive !== "upload"? setScreenActive("upload") : setScreenActive("principal");
    }

    const handleClickConfig = () =>{
        
        screenActive !== "config"? setScreenActive("config") : setScreenActive("principal");

    }

    return (
        <div className="navapp__container">
            <i 
                className="fas fa-cog navapp__logo"
                ref={ refConfig }
                onClick={ handleClickConfig }
                disabled={!initialStatus}
            ></i>
            <h2 className="navapp__title">{screenActive === "upload"? "Publica": "Pet Finder"} <i className="fas fa-paw"></i></h2>
            <i 
                className="fas fa-cloud-upload-alt navapp__logo link"
                ref={ refUpload }
                onClick={ handleClickUpload }
            >                
            </i>
        </div>
    )
}
