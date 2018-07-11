import * as actions from '../action-type';
export const addId = (id) => {
  return {
    type: actions.ADD_TO_CAR,
    id: id
  }
}