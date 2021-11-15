import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  reducer from './reducers/index';
import logger from 'redux-logger'
// import { watcherSaga } from "./saga/rootsaga";
import watcherSaga from "./saga/rootSagas";

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSaga)

export default store;