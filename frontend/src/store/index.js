import {applyMiddleware, combineReducers, createStore} from "redux";
import reducers from "../reducers";
import history from '../history'
import {routerMiddleware, routerReducer} from "react-router-redux";

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

export default store