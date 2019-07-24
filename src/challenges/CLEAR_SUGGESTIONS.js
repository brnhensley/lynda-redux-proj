import c from '../constants'
import { suggestions } from '../store/reducers'
import expect from 'expect'

const action = {
    type: c.CLEAR_SUGGESTIONS
}

const state = ['Heavenly Ski Resort', 'Heavens Sonohara']

const expectedState = []

const actualState = suggestions(state, action)

expect(actualState).toEqual(expectedState)

console.log(`

    Challenge C: CLEAR_SUGGESTIONS PASSED!!!

`)