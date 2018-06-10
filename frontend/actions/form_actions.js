export const RECEIVE_FORM_ERROR = 'RECEIVE_FORM_ERROR';
export const REMOVE_FORM_ERROR = 'REMOVE_FORM_ERROR';

export const receiveFormError = (error) => {
    return {
        type: RECEIVE_FORM_ERROR,
        error: error
    }
}

export const removeFormError = () => {
    return {
        type: REMOVE_FORM_ERROR
    }
}