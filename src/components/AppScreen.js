import React, { useState } from 'react';
import { Config } from './petsapp/Config';
import { NavApp } from './petsapp/NavApp';
import { Upload } from './petsapp/Upload';


export const AppScreen = () => {

    const [screenActive, setScreenActive] = useState("principal");
    
    return (
        <>
            <NavApp screenActive={ screenActive }
                setScreenActive={ setScreenActive }
            />

            {
                screenActive==="upload"
                &&
                <Upload />
            }

            {
                screenActive==="config"
                &&
                <Config />
            }

            
            
        </>
    )
}
