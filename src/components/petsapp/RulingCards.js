import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movementSettings, settingCardContainer } from '../actions/app';
import { PetsScreen } from './PetsScreen';

export const RulingCards = ({ data, movement, setMovement}) => {

    const dispatch = useDispatch();

    const { startPosition, endPosition, traslatePosition, divWeight} = movement;

    useEffect(() => {

        if(data !== null){
            dispatch( movementSettings({
                actualCard: data[0],
                data: data,
                movement: movement,
                setMovement: setMovement,
                divWeight: divWeight,
                maximumValue: (data.length-1)*(-divWeight),
                positiveMovement: traslatePosition-divWeight
            }));
        }
        
    }, [data]);

    const handleTouchStart = (e) =>{

        setMovement({
            ...movement,
            startPosition: e.targetTouches[0].clientX
        });

    }

    const handleTouchEnd = (e) =>{

        setMovement({
            ...movement,
            endPosition: e.changedTouches[0].clientX
        });
    }

    useEffect(() => {

        if(data !== null){

            const newMovement = startPosition-endPosition;
            const maximumValue = (data.length-1)*(-divWeight);
            const positiveMovement = traslatePosition-divWeight;
            const conditionTraslation = (positiveMovement) < maximumValue ? maximumValue : positiveMovement;
            // const negativeMovement = traslatePosition+divWeight;

            if(newMovement > 50){
                
                setMovement({
                    ...movement,
                    traslatePosition: conditionTraslation
                });

                refCardContainer.current.style.transform = `translate(${ conditionTraslation }px, 0)`;

                // dispatch( movementSettings({
                //     ...movementConfig,
                //     actualCard: data[(-conditionTraslation/divWeight)],
                //     positiveMovement: (conditionTraslation)-divWeight
                // }));

            }

        }
            
    }, [endPosition]);

    const refCardContainer = useRef(null);

    useEffect(() => {
        
        dispatch( settingCardContainer(refCardContainer.current));

    }, []);

    

    return (
        <div 
            className="petscreen__card-container" 
            ref={ refCardContainer }
            onTouchStart={ handleTouchStart }
            onTouchEnd={ handleTouchEnd }                
            >

            {
                data !== null
                &&
                data.map((pet)=>(
                    <PetsScreen key={pet.id} pet={ pet }/>
                ))
            }

        </div>
    )
}
