import * as actions from '../action-type';

export const bookIDs = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TO_CAR:
      return state.concat(action.id);
    default:
      return state;
  }
}