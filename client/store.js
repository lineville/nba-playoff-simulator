import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import reducer from './reducer'
const middleware = applyMiddleware(
  thunkMiddleWare.withExtraArgument({ axios }),
  loggingMiddleware
)
export default createStore(reducer, middleware)
