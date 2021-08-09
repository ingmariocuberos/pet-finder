export const cardMovement = ( movementConfig, cardContainer ) =>{

    const { data, movement, setMovement, maximumValue, positiveMovement, divWeight } = movementConfig;
    const conditionTraslation = (positiveMovement) < maximumValue ? maximumValue : positiveMovement;

    cardContainer.style.transform = `translate(${ conditionTraslation }px, 0)`;

    setMovement({
        ...movement,
        traslatePosition: conditionTraslation
    });

    return {
        data,
        conditionTraslation,
        divWeight
    }
}
    
    