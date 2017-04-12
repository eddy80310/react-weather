import  { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: 
            // do not do state.push(action.payload.data). Never mutate state. Always return a new state. 
            // concat returns a new array 
            // return state.concat([action.payload.data]); // this is the same as below 
            return [action.payload.data, ...state];
    }
    return state;
}