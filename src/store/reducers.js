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

export const errors = (state = [], action) => {
  switch (action.type) {

    case c.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]

    case c.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  }
}

export const allSkiDays = (state = [], action) => {
  switch (action.type) {

    case c.ADD_DAY:

      const hasDay = state.some(skiDay => skiDay.date === action.payload.date)

      // this is an if statement
      return (hasDay) ?
        state :

        [
          ...state,
          skiDay(null, action)
        ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case c.REMOVE_DAY:
      return state.filter(skiDay => skiDay.date !== action.payload)

    default:
      return state

  }
}

export const fetching = (state = false, action) => {
  switch (action.type) {

    case c.FETCH_RESORT_NAMES:
      return true

    case c.CANCEL_FETCHING:
      return false

    case c.CHANGE_SUGGESTIONS:
      return false

    default:
      state
  }
}

export const suggestions = (state = [], action) => {
  switch (action.type) {

    case c.CLEAR_SUGGESTIONS:
      return []

    case c.CHANGE_SUGGESTIONS:
      return action.payload

    default:
      return state

  }
}