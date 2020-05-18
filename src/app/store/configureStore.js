import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly/'

import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

export default function configureStore(preloadState) {
  const middleware = [thunk]
  const middlewareEnhancer = applyMiddleware(...middleware);

  const storeEnhancers = [middlewareEnhancer]

  const compoesedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadState,
    compoesedEnhancer
  )

  if(process.env.NODE_ENV !== "production") {
    if(module.hot) {
      module.hot.accept("../reducers/rootReducer", () => {
        const newRootReducer = require('../reducers/rootReducer').default
        store.replaceReducer(newRootReducer)
      })
    }
  }

  return store
}