import {combineReducers, createStore} from "redux";
import reducers from "../reducers";
import history from '../history'

const store = createStore(
  combineReducers({
    ...reducers
  })
)

export default store