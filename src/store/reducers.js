import c from '../constants';

// Same as
// ⬆ Turnery Operator for this if statement
// function goal(state, action) {
// if (action.type === c.SET_GOAL) {
//   return parseInt(action.payload)
// }
// else {
//   return state
// }

export const goal = (state = 10, action) => {
  (action.type === c.SET_GOAL) ?
    parseInt(action.payload) :
    state
}

export const skiDay = (state = null, action) => {
  (action.type === c.ADD_DAY) ?
    action.payload : // If true
    state // Else
}

export const errors = (state=[], action) => {
  switch(action.type) {

    case c.ADD_ERROR :
      return [
        ...state,
        action.payload
      ]

    case c.CLEAR_ERROR :
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  }
}