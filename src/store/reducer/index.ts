import {
    combineReducers,
    Reducer,
    ReducersMapObject
} from 'redux';
import {
    messageReducer,
    IMessageState
} from './message.reducer';

export interface IState {
    readonly message: IMessageState;
}

export const reducers: ReducersMapObject = {
    message: messageReducer
};

export const tittletattleReducers: Reducer<IState> = combineReducers(reducers);
