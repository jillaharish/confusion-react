import * as ActionTypes from "./ActionTypes";

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};

export const Feedback = (state = {errMess: null, feedback: InitialFeedback}, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_FEEDBACK:
            return {...state, feedback: action.payload};

        default:
            return state;
    }
};
