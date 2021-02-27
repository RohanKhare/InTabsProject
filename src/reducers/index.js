import { combineReducers } from 'redux';


const userData = (initialData = [], action) => {
    if (action.type === 'SET_USER_DATA') {
        return action.payload
    }
    return initialData
}

export default combineReducers(
    {
        userData: userData
    }
);