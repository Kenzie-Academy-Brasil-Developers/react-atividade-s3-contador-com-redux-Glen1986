import {ActionTypes} from '../../modules/counter/actionTypes'
export const addNumber = () => {
  return {
    type: ActionTypes.ADD_NUM,
    payload: 1
  }

}
export const lesNumber = () => {
  return {
    type: ActionTypes.LES_NUM,
    payload: 1
  }

}
/*
export const addNumber = (payload) => ({type: "ADD_NUM", payload: 1});
export const lesNumber = (payload) => ({type: "LES_NUM", payload: 1});
*/
