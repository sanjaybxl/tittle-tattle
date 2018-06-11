import { ITittleTattleUser } from './user';

export interface ITittleTattleMessage {
    user: ITittleTattleUser;
    text: string;
    date: Date;
}
