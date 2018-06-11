import * as React from 'react';
import {
    TittleTattleInput,
    ITittleTattleInputState
} from './TittleTattleInput';
import { shallow } from 'enzyme';
import * as assert from 'assert';

describe('TittleTattleInput', () => {

    const props = {
        onAddMessage: (message: string) => {
            console.warn(message);
        }
    };

    it('should render', () => {
        shallow(<TittleTattleInput onAddMessage={props.onAddMessage}/>);
    });

    it('should render empty state', () => {
        const wrapper = shallow(<TittleTattleInput onAddMessage={props.onAddMessage}/>);
        assert.equal((wrapper.state() as ITittleTattleInputState).message, '');
    });

});
