import { createStore, combineReducers } from '@reduxjs/toolkit';



const defaultState = {
  text: 'type something here'
}
const TEXTUPDATE = 'TEXTUPDATE';

const updateText = () => {
  return {
    type: TEXTUPDATE,
    // text:
  }
}


const textReducer = ((state = defaultState, action) => {
  switch (action.type) {
    case TEXTUPDATE:
    console.log('we got an update');
    return state;
    break;
    default:
    return state;

  }
})



export const store = createStore(textReducer);
console.log(store.getState());
