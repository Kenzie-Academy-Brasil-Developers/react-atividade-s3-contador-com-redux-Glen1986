import {ADD_NUM} from '../../modules/counter/actionTypes'
import {LES_NUM} from '../../modules/counter/actionTypes'
export const addNumber = () => {
  return {
    type: ADD_NUM,
    payload: 1
  }

}
export const lesNumber = () => {
  return {
    type: LES_NUM,
    payload: 1
  }

}
