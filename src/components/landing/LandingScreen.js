import React from 'react';
import { MainBody } from './MainBody';
import { NavBar } from './NavBar';


export const LandingScreen = () => {

    const itemsGrid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];

    return (
        <>            
            <NavBar titulo="Necesito mascota"/>
            <div className="landingscreen__container">
                

                <MainBody />

                <div className="landingscreen__side-right">

                    <img 
                    src="./assets/Fotosperritos/photo-landing-dog-cat.jpg" 
                    className="landing__principal-picture" 
                    alt="abandoned-pets"/>         
                        
                </div>
                    
            </div>
        </>
    )
}
