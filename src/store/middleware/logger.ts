import {
    Middleware
} from 'redux';

export const logger: Middleware = (store) =>
    (next) =>
        (action) => {
            // avoid tslint error on console
            // tslint:disable
            console.group(action.type);
            console.info('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            console.groupEnd();
            // tslint:enable
            return result;
        };
