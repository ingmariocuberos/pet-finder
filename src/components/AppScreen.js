import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';
import { Config } from './petsapp/Config';
import { NavApp } from './petsapp/NavApp';
import { PetsScreen } from './petsapp/PetsScreen';
import { Upload } from './petsapp/Upload';



export const AppScreen = () => {

    const [screenActive, setScreenActive] = useState("principal");
    const [data, setData] = useState(null);
    const [published, setPublished] = useState(false)

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
            console.log(database); 
        })
    }, []);
    
    return (
        <>
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

            <PetsScreen/>

            
            
        </>
    )
}
