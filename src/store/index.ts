import {
    applyMiddleware,
    createStore,
    Store
} from 'redux';
import {
    tittletattleReducers,
    IState
} from './reducer';
import { logger } from './middleware/logger';

export const tittletattleStore: Store<IState> = createStore(
    tittletattleReducers,
    applyMiddleware(logger)
);
