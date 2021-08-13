import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextMovement, likesMovement } from '../../helpers/transitionMovement';
import { changeModalStatus, heartUpAction, thumbingUp, setActionButtons } from '../actions/app';

export const Buttons = () => {

    const dispatch = useDispatch();

    const { cardContainer } = useSelector( state => state.app );

    const handleNext = (e) =>{
     
        dispatch( heartUpAction( false ) );
        dispatch( changeModalStatus(false));
        dispatch( thumbingUp("viewed") );

        nextMovement(cardContainer);               

    }

    const refBtnNext = useRef(null);
    const refBtnHeart = useRef(null);
    const refBtnThumbsUp = useRef(null);

    useEffect(() => {
        if(refBtnThumbsUp.current !== null){
            dispatch(setActionButtons({
                next: refBtnNext,
                heart: refBtnHeart,
                like: refBtnThumbsUp
            }));
        }
        
    }, [refBtnNext]);

    

    const handleAnimation = (e) =>{
       
        if(e.target.className.includes('heart')){
            
            e.target.classList.add('animate-heart');
            dispatch( thumbingUp("hearts") );
            dispatch( heartUpAction( true ) );
            dispatch( changeModalStatus(true));
            
        } else if( e.target.className.includes('thumbs-up') ){
            e.target.classList.add('animate-like');
            dispatch( thumbingUp("likes") );
            handleNext();
            dispatch( heartUpAction( false ) );
            dispatch( changeModalStatus(false));
            likesMovement(cardContainer);
        }        
    }

    const removeAnimation = (e)=>{
        e.target.classList.remove('animate-heart');
        e.target.classList.remove('animate-like');
    }

    return (
        <div className="buttons__button-container flex-row-nowrap">

            <button 
                className="buttons__btn"
                onClick={ handleNext }
                ref={ refBtnNext }
                ><i className="fas fa-arrow-alt-circle-left buttons__icon-next"></i></button>
            

            <button 
                className="buttons__btn heart"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }
                ref={ refBtnHeart }><i className="fas fa-heartbeat buttons__icon-heart"></i></button>

            <button 
                className="buttons__btn thumbs-up"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }
                ref={ refBtnThumbsUp }
                ><i className="fas fa-thumbs-up buttons__icon-thumbs-up"></i></button>
            
        </div>
    )
}
