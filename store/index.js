import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { persistStore } from 'redux-persist';
import cartReducer from "./cart";
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import demoReducer from './demo';

const rootReducers = combineReducers({
    cartlist: cartReducer,
    wishlist: wishlistReducer,
    comparelist: compareReducer,
    demo: demoReducer,
});


const sagaMiddleware = createSagaMiddleware();

export const makeStore = (context) => {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__persistor = persistStore(store);
    return store;
};


export const wrapper = createWrapper(makeStore, { debug: true });