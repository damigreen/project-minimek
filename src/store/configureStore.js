import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../app/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(preloadedState) {
    const midddlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...midddlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    if(process.env.NODE_ENV !== 'production') {
        if(module.hot) {
            module.hot.accept('../app/reducers/rootReducer', () => {
                const newRootReducer = require('../app/reducers/rootReducer');
                store.replaceReducer(newRootReducer);   
            })
        }
    }
    return store;
}