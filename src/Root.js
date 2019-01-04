import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import reduxPromise from 'redux-promise';

import reducers from './reducers';
import async from './middlewares/async';


export default ({initialState = {}, children}) => {
    const store = createStore(reducers, initialState, applyMiddleware(async));
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
