import {actionTypes} from 'redux-resource';
import {ADD_NUM} from "./actionTypes";
import {LES_NUM} from "./actionTypes";
const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_NUM':
      return state + action.payload;
    case "SUB_NUM":
      return state - action.payload;
    default:
      return state;
  }
}
export default reducerCounter;

