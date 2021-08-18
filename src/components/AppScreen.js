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

    const itemsGrid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
    
    return (
        <div className="appscreen__whole-page">
            
            <div className="appscreen__side-left">

                <div className='appscreen__container-grid'>                
                    {
                        itemsGrid.map((item)=>{

                            return <div className={`appscreen__group-item-${Math.ceil(item/8)} appscreen__item-${item}`} key={`rescued-${item}`}><img className='appscreen__image' src={`./assets/grid/${item}_opt.jpg`} alt={`rescued-${item}`} /></div>
                        })
                    }
                </div>
                    
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

                <>
                    <RulingCards 
                    data={ data }
                    movement={ movement } 
                    setMovement={ setMovement }
                    screenActive={ screenActive } />
                    <br/>
                    <Buttons/>
                </>         

                {/* {
                    screenActive==="principal"
                    &&
                    
                    
                }                 */}
                
            </div>

            <div className="appscreen__side-right">
                <h1 className="appscreen__words">
                    Adopta! Muchos animalitos mueren esperando su oportunidad.
                </h1>
                
                <img className="appscreen__photo mt-3" src='./assets/Fotosperritos/foto-landing.jpg' alt="poli-santa-marta" />
                <p className="appscreen__place-text"><i>Polideportivo - Santa Marta 2019</i></p>
                    
            </div>

            
        </div>
    )
}
