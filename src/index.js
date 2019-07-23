import c from './constants';
import { allSkiDays } from './store/reducers';

const state = [
   {
      "resort": "Kirkwood",
      "date": "2016-12-7",
      "powder": true,
      "backcountry": false
   },
   {
      "resort": "Squaw Valley",
      "date": "2016-12-5",
      "powder": false,
      "backcountry": false
   }
]

const action = {
   type: c.REMOVE_DAY,
   payload: "2016-12-7"
}

const nextState = allSkiDays(state, action)

console.log(`

   initial state: ${JSON.stringify(state)}
   action: ${JSON.stringify(action)}
   new state: ${JSON.stringify(nextState)}

`);
