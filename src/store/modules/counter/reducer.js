import {ActionTypes} from '../counter/actionTypes'
const reducerCounter = (state = 0, action) => {

  console.log(action)
  switch (action.type) {

    case ActionTypes.ADD_NUM:
      return state + action.payload;

    case ActionTypes.LES_NUM:
      return state - action.payload;

    default:
      return state;
  }
}
export default reducerCounter;

