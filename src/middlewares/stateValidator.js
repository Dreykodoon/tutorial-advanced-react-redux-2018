import tv4 from 'tv4';

import stateSchema from './stateSchema';

export default function ({dispatch, getState}) {
    return function (next) {
        return function (action) {
            next(action);

            if(tv4.validate(getState(), stateSchema)) {
                console.warn('Invalid state schema detected!');
            }
        }
    }
}