import { combineReducers } from 'redux'
import counter from './counter.js'
import message from './message'

const addApp =  combineReducers({
  counter,
  message
})
export default addApp
