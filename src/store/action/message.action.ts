import { ADD_MESSAGE } from '../constant/message.constant';
import { ITittleTattleMessage } from '../../model/message';
import { ITittleTattleAction } from './type.action';

export const addMessage = (message: ITittleTattleMessage): ITittleTattleAction => ({
    type: ADD_MESSAGE,
    payload: message
});
