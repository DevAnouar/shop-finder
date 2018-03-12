import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reducers from "../reducers";
import { connectRoutes } from 'redux-first-router'
import routesMap from '../routes'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const { reducer, middleware, enhancer } = connectRoutes(routesMap)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers,
    location: reducer
  }),
  compose(enhancer, applyMiddleware(middleware, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store