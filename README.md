# What is persist-redux-store ?

``persist-redux-store`` is a very simple and basic tool to persist store at initialisation. It is as simple as you could just copy past its index.js's code instead of adding the npm package.

# What it does ?
I persist your redux store over user session, storing it into localStorage

# How to use it ?

``defaultStater`` is a funtion that takes 2 arguments :
1. Your very initial state.
2. The id of this reducer

It return an array to leverage destructuring syntax.
1. first element is the initial state merged with the persisted store. Persisted store is overriding the your very initial store.
2. Second element is the method to persist your state. It takes a javascript object as argument.
```

import {defaultStater} from "../index";

const [initialState,saveDate]=defaultStater(0,'counterReducer');

function counter(state=initialState, action) {
    if (typeof state === 'undefined') {
        state = 0 // If state is undefined, initialize it with a default value
    }
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    }else if(action.type='SAVE'){
        return saveDate(state);
    } else {
        return state // In case an action is passed in we don't understand
    }
}

```
