import { types } from "../../types/types";

export const setError = (err) =>(
    {
        type: types.setError,
        payload: err
    }
);

export const removeError = () =>(
    {
        type: types.removeError
    }
);

export const setUploadError = (err) =>(
    {
        type: types.setUploadError,
        payload: err
    }
);

export const removeUploadError = () =>(
    {
        type: types.removeUploadError
    }
);

export const startLoading = ( ) =>({
    type: types.uiStartLoading    
});

export const finishLoading = ( ) =>({
    type: types.uiFinishLoading    
});
