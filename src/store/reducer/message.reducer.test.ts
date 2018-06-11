import { ADD_MESSAGE } from '../constant/message.constant';
import { ITittleTattleMessage } from '../../model/message';
import { messageReducer } from './message.reducer';
import { ITittleTattleAction } from '../action/type.action';
import { assert } from 'chai';

describe('message reducer', () => {

    const dummyMessage: ITittleTattleMessage = {
        user: {
            id: 1,
            name: 'toto',
            pic: ''
        },
        text: 'test',
        date: new Date()
    };
    const action: ITittleTattleAction = {
        type: ADD_MESSAGE,
        payload: dummyMessage
    };
    describe(`${ADD_MESSAGE} action`, () => {
        it('should add new message in empty array', () => {
            const res: ITittleTattleMessage[] = messageReducer([], action);
            assert.equal(res.length, 1);
            assert.deepEqual(res[0], dummyMessage);
        });

        it('should add new message at the end of the array', () => {
            const res2: ITittleTattleMessage[] = messageReducer([dummyMessage], action);
            assert.equal(res2.length, 2);
            assert.deepEqual(res2[1], dummyMessage);
        });
    });
});
