import * as React from 'react';
import { shallow } from 'enzyme';
import { TittleTattlePic } from './TittleTattlePic';

describe('TittleTattlePic component', () => {
    it('shoud render', () => {
        shallow(<TittleTattlePic src={''} alt={''}/>);
    });
});
