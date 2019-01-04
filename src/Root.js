import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import reduxPromise from 'redux-promise';

import reducers from './reducers';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';


export default ({initialState = {}, children}) => {
    const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
