import * as React from 'react';
import { shallow } from 'enzyme';
import * as assert from 'assert';
import {
    TittleTattleMessage,
    ITittleTattleMessageProps
} from './TittleTattleMessage';
import { ITittleTattleMessage } from '../../model/message';

describe('TittleTattleInput', () => {

    const dummyMessage: ITittleTattleMessage = {
        user: {
            id: 2,
            name: 'toto',
            pic: 'toto-pic'
        },
        text: 'test',
        date: new Date()
    };

    const props: ITittleTattleMessageProps = {
        message: dummyMessage,
        mine: true
    };

    it('should render', () => {
        shallow(<TittleTattleMessage message={props.message} mine={true}/>);
    });

    it('should render my message', () => {
        const wrapper = shallow(<TittleTattleMessage message={props.message} mine={true}/>);
        const p = wrapper.find('div.message');
        // tslint:disable:max-line-length
        assert.equal(p.html(), `<div class="message mine"><div class="user"></div><div class="text">${dummyMessage.text}</div></div>`);
    });

    it('should render another message', () => {
        const wrapper2 = shallow(<TittleTattleMessage message={props.message} mine={false}/>);
        const p2 = wrapper2.find('div.message');
        // tslint:disable:max-line-length
        assert.equal(p2.html(), `<div class="message"><div class="user"><img class="tittletattle-pic" src="${dummyMessage.user.pic}" alt="${dummyMessage.user.name} profile picture"/></div><div class="text">${dummyMessage.text}</div></div>`);
    });
});
