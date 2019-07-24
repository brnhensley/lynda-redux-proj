import c from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState

console.log(`

Initial State
=============
goals: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggestions: ${state.resortNames.suggestions}

`);

state = appReducer(state, {
   type: c.SET_GOAL,
   payload: 2
})

state = appReducer(state, {
   type: c.ADD_DAY,
   payload: {
      "resort": "MT TITTIES",
      "date": "999",
      "powder": false,
      "backcountry": true
   }
})

state = appReducer(state, {
   type: c.CHANGE_SUGGESTIONS,
   payload: ["Mt Hood", "Mt Butter", "Mt COCKSUCKER"]
})

console.log(`

   Next State
   =============
   goals: ${state.goal}
   resorts: ${JSON.stringify(state.allSkiDays)}
   fetching: ${state.resortNames.fetching}
   suggestions: ${state.resortNames.suggestions}

`);
