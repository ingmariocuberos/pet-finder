import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardMovement } from '../../helpers/cardMovement';
import { changeModalStatus, heartUpAction, movementSettings, thumbingUp } from '../actions/app';

export const Buttons = () => {

    const dispatch = useDispatch();

    const { cardContainer } = useSelector( state => state.auth );
    const movementConfig = useSelector( state => state.auth.movementSettings );

    const handleNext = (e) =>{

        const { data, conditionTraslation, divWeight } = cardMovement(movementConfig, cardContainer);

        dispatch( movementSettings({
            ...movementConfig,
            actualCard: data[(-conditionTraslation/divWeight)],
            positiveMovement: conditionTraslation-divWeight
        }));
        dispatch( heartUpAction( false ) );
        dispatch( changeModalStatus(false));
        handleAnimation(e);

    }

    const handleAnimation = (e) =>{

        if(e.target.className.includes('heart')){
            e.target.classList.add('animate');
            dispatch( thumbingUp("hearts") );
            dispatch( heartUpAction( true ) );
            dispatch( changeModalStatus(true));
            
        } else if( e.target.className.includes('thumbs-up') ){
            e.target.classList.add('animate');
            dispatch( thumbingUp("likes") );
            handleNext();
            dispatch( heartUpAction( false ) );
            dispatch( changeModalStatus(false));

        } else if( e.target.className.includes('next') ){

            dispatch( thumbingUp("viewed") );

        }
        
    }

    const removeAnimation = (e)=>{
        e.target.classList.remove('animate');
    }

    return (
        <div className="buttons__button-container flex-row-nowrap">

            <button 
                className="buttons__btn"
                onClick={ handleNext }><i className="fas fa-arrow-alt-circle-left buttons__icon-next"></i></button>
            

            <button 
                className="buttons__btn heart"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }><i className="fas fa-heartbeat buttons__icon-heart"></i></button>

            <button 
                className="buttons__btn thumbs-up"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }><i className="fas fa-thumbs-up buttons__icon-thumbs-up"></i></button>
            
        </div>
    )
}
