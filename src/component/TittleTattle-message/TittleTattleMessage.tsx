import * as React from 'react';
import { ITittleTattleMessage } from '../../model/message';
import * as cx from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import './TittleTattleMessage.css';
import { TittleTattlePic } from '../TittleTattle-pic/TittleTattlePic';

export interface ITittleTattleMessageProps {
    message: ITittleTattleMessage;
    mine: boolean;
}

/**
 *
 * @param {IChatWindowProps & {children?: React.ReactNode}} props
 * @returns {any}
 * @constructor
 */
export const TittleTattleMessage: React.SFC<ITittleTattleMessageProps> = (props) => {

    const {
        message,
        mine
    } = props;

    const classNames = cx('message', {mine});

    // tslint:disable
    const displayUser = (myMessage) => {
        if (!myMessage) {
            return (<TittleTattlePic src={message.user.pic}
                               alt={`${message.user.name} profile picture`}/>);
        }
        return <></>;
    };

    // with simple animation
    // @link https://github.com/reactjs/react-transition-group/tree/v1-stable#animate-initial-mounting
    return (
        // tslint:disable
        <CSSTransitionGroup
            transitionName='example'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className={classNames}>
                <div className='user'>
                    {displayUser(mine)}
                </div>
                <div className='text'>{message.text}</div>
            </div>
        </CSSTransitionGroup>
    );
};
