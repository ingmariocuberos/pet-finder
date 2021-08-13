export const nextMovement = (refCardContainer) =>{

    const singleCard = refCardContainer.current.children[0];
    const positiveMovement = -(singleCard.clientHeight + (singleCard.clientHeight * 17 / 76));

    singleCard.classList.add('grey-filter');                
    singleCard.style.transform = `translate(${ positiveMovement }px, 0) scaleX(1) rotate(-260deg)`;

    refCardContainer.current.style.transition = 'transform 0.9s ease';
    refCardContainer.current.style.transform = `translate(0, ${ positiveMovement }px)`;

    const transition = () =>{
        refCardContainer.current.style.transition = 'none';
        refCardContainer.current.style.transform = `translate(0, 0)`;
        refCardContainer.current.appendChild(singleCard);
        refCardContainer.current.removeEventListener('transitionend', transition);
    }

    refCardContainer.current.addEventListener('transitionend', transition );

}

export const likesMovement = (refCardContainer) =>{

    const singleCard = refCardContainer.current.children[0];
    const positiveMovement = -(singleCard.clientHeight + (singleCard.clientHeight * 17 / 76));

    singleCard.classList.add('blue-filter'); 
    singleCard.style.transform = `translate(${ -positiveMovement }px, 0) scaleX(1) rotate(260deg)`;

    refCardContainer.current.style.transition = 'transform 0.9s ease';
    refCardContainer.current.style.transform = `translate(0, ${ positiveMovement }px)`;

    const transition = ()=>{
        refCardContainer.current.style.transition = 'none';
        refCardContainer.current.style.transform = `translate(0, 0)`;
        refCardContainer.current.appendChild(singleCard);
        refCardContainer.current.removeEventListener('transitionend', transition);
    }

    refCardContainer.current.addEventListener('transitionend', transition );

}





