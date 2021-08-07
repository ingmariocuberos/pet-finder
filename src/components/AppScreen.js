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

    const database : any[] = [];

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
        if(refApp.current !== null){
            setMovement({
                ...movement,
                divWeight: refApp.current.clientWidth
            });
        }
    }, [])

    
    
    return (
        <div ref={ refApp }>
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

            <RulingCards 
                data={ data }
                movement={ movement } 
                setMovement={ setMovement } />            

            <br/>

            {
                screenActive==="principal"
                &&
                <Buttons/>
            }

            
                
            
        </div>
    )
}
