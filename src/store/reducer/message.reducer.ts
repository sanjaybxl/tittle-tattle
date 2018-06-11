import { ITittleTattleAction } from '../action/type.action';
import { ITittleTattleMessage } from '../../model/message';
import { Reducer } from 'redux';
import { ADD_MESSAGE } from '../constant/message.constant';
import {
    user1pic,
    user2pic
} from '../../images';

export type IMessageState = ITittleTattleMessage[];

const initialState: ITittleTattleMessage[] = [
    {
        user: {
            id: 2,
            name: 'Bar',
            pic: `${user2pic}`
        },
        text: 'namaste',
        date: new Date()
    },
    {
        user: {
            id: 1,
            name: 'Foo',
            pic: `${user1pic}`
        },
        text: 'namaste',
        date: new Date()
    }
];

/**
 *
 * @param {ITittleTattleMessage[]} state
 * @param {ITittleTattleAction} action
 * @returns {ITittleTattleMessage[]}
 */
export const messageReducer: Reducer<ITittleTattleMessage[]> =
    (state = initialState, action: ITittleTattleAction): ITittleTattleMessage[] => {
        switch (action.type) {

            case (ADD_MESSAGE):
                state = [...state, action.payload];
                break;

            default:
                break;
        }
        return state;
    };
