export const manipulatingAge = (age, ageId) =>{

    if(parseInt(age) === 1){
        const time = (ageId === "year"? "año" : "mes" );
        return `${age} ${time}`;
    } else {
        const time = (ageId === "year"? "años" : "meses" );
        return `${age} ${time}`;
    }
}

export const manipulatingSterilized = (sterilized) =>{

    return sterilized ? "Esterilizado" : "No Esterilizado";
    
}

