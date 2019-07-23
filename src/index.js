import c from './constants';
import { goal, skiDay, errors } from './store/reducers';

const state = [
   "shit",
   "bad"
]

const action = {
   type: c.CLEAR_ERROR,
   payload: 0
}

const nextState = errors(state, action)

console.log(`

initial state: ${state}
action: ${JSON.stringify(action)}
new state: ${JSON.stringify(nextState)}

`);
