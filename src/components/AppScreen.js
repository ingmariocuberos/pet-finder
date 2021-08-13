import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/firebase-config';
import { Buttons } from './petsapp/Buttons';
import { Config } from './petsapp/Config';
import { NavApp } from './petsapp/NavApp';
import { RulingCards } from './petsapp/RulingCards';
import { Upload } from './petsapp/Upload';

export const AppScreen = () => {

    const [screenActive, setScreenActive] = useState("principal");
    const [data, setData] = useState(null);

    const dataRef = db.collection('animales');

    const database = [];

    useEffect(() => {
        dataRef.get().then(snapshot => {
            snapshot.forEach( snapChild =>{
                database.push({
                    id: snapChild.id,
                    ...snapChild.data()
                })                
            }) 
            setData(database);
        })
    }, []);

    const [movement, setMovement] = useState({
        startPosition:0,
        traslatePosition:0,
        endPosition:0,
        divWeight: 0
    });

    const refApp = useRef(null);

    useEffect(() => {
        if(refApp !== null){
            const screenWidth = refApp.current.clientWidth;
            setMovement({
                ...movement,
                divWeight: screenWidth
            });
        }
        
    }, [])

    
    
    return (
        <div className="appscreen__whole-page">
            
            <div className="appscreen__side-right">
                <h1 className="appscreen__words">
                    En honor a todos los animalitos que murieron esperando su oportunidad
                </h1>
                <h3 className="appscreen__words">
                    -Mario Cuberos
                </h3>
                
                <img className="appscreen__photo" src='./assets/Fotosperritos/foto-landing.jpg' alt="poli-santa-marta" />
                    
            </div>
            
            <div
            className="appscreen__app-container" 
            ref={ refApp }>


                <NavApp 
                    screenActive={ screenActive }
                    setScreenActive={ setScreenActive }
                    
                />

                {
                    screenActive==="upload"
                    &&
                    <Upload 
                        setScreenActive={ setScreenActive } />
                }

                {
                    screenActive==="config"
                    &&
                    <Config />
                }            

                {
                    screenActive==="principal"
                    &&
                    <>
                        <RulingCards 
                        data={ data }
                        movement={ movement } 
                        setMovement={ setMovement } />
                        <br/>
                        <Buttons/>
                    </>
                    
                }                
                
            </div>

            <div className="appscreen__side-right">
                <h1 className="appscreen__words">
                    En honor a todos los animalitos que murieron esperando su oportunidad
                </h1>
                <h3 className="appscreen__words">
                    -Mario Cuberos
                </h3>
                
                <img className="appscreen__photo mt-3" src='./assets/Fotosperritos/foto-landing.jpg' alt="poli-santa-marta" />
                <p className="appscreen__place-text"><i>Polideportivo - Santa Marta 2019</i></p>
                    
            </div>

            
        </div>
    )
}
