import { types } from "../../types/types";

export const settingCardContainer = ( cardContainer ) =>(
    {
        type: types.setCardContainer,
        payload: cardContainer
    }
);

export const movementSettings = ( movementValues ) =>(
    {
        type: types.movementSettings,
        payload: movementValues
    }
);

export const selectingRefCard = ( refCard ) =>(
    {
        type: types.refCard,
        payload: refCard
    }
);