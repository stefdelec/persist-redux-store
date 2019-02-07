
import {defaultStater} from "../index";


const [initialState,saveDate]=defaultStater(0,'counterReducer');

function counter(state=initialState, action) {
    if (typeof state === 'undefined') {
        state = 0 // If state is undefined, initialize it with a default value
    }

    if (action.type === 'INCREMENT') {
        return  saveDate(state + 1);
    } else if (action.type === 'DECREMENT') {
        return saveDate(state - 1);
    } else {
        return state // In case an action is passed in we don't understand
    }
}
