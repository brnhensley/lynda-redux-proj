import c from '../constants';

// Same as
// function goal(state, action) {
export const goal = (state, action) => {
  if (action.type === c.SET_GOAL) {
    return action.payload
  }
  else {
    return state
  }
}