import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reducers from "../reducers";
import { connectRoutes } from 'redux-first-router'
import routesMap from '../routes'

const { reducer, middleware, enhancer } = connectRoutes(routesMap)

const store = createStore(
  combineReducers({
    ...reducers,
    location: reducer
  }),
  compose(enhancer, applyMiddleware(middleware))
)

export default store