import * as React from 'react';
import { mount } from 'enzyme';
import * as assert from 'assert';
import {
    TittleTattleWindow,
    IChatWindowProps
} from './TittleTattleWindow';
import { ITittleTattleMessage } from '../../model/message';

describe('TittleTattleInput', () => {

    const dummyMessage: ITittleTattleMessage = {
        user: {
            id: 1,
            name: 'toto',
            pic: ''
        },
        text: 'test',
        date: new Date()
    };

    const props: IChatWindowProps = {
        messages: [dummyMessage, {...dummyMessage, text: 'test-2', user: {...dummyMessage.user, id: 2}}],
        userId: 1
    };

    it('should render', () => {
        mount(<TittleTattleWindow messages={props.messages} userId={props.userId}/>);
    });

    it('should render 2 messages', () => {
        const wrapper = mount(<TittleTattleWindow messages={props.messages} userId={props.userId}/>);
        const messagesWrapper = wrapper.find('.messages');
        const messages = messagesWrapper.children().children().children().get(0);
        // must have to node
        assert.equal(messages.props.children.length, 2);
        // test each child
        assert.deepEqual(messages.props.children[0].props.message, (props as any).messages[0]);
        assert.deepEqual(messages.props.children[1].props.message, (props as any).messages[1]);
    });
});
