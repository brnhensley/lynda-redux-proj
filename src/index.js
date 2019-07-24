import c from './constants'
import storeFactory from './store'

const initialState = (localStorage['redux-store']) ?
   JSON.parse(localStorage['redux-store']) :
   {}

const saveState = () => {
   const state = JSON.stringify(store.getState())
   localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
   type: c.ADD_DAY,
   payload: {
      "resort": "Kirkwood",
      "date": "2016-12-7",
      "powder": true,
      "backcountry": false
   }
})

store.dispatch({
   type: c.ADD_DAY,
   payload: {
      "resort": "Kirddskwood",
      "date": "2016-ff-7",
      "powder": true,
      "backcountry": false
   }
})

store.dispatch({
   type: c.ADD_DAY,
   payload: {
      "resort": "Kirkwoffffffod",
      "date": "202-7",
      "powder": true,
      "backcountry": true
   }
})