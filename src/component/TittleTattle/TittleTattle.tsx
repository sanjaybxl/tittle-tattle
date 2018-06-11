import * as React from 'react';
// import { TittleTattleWindow } from '../tittletattle-window/TittleTattleWindow';
import { TittleTattleInput } from '../TittleTattle-input/TittleTattleInput';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    IDispatchProps,
    IOwnProps,
    IStateProps,
} from './index';
import { TittleTattleWindow } from '../TittleTattle-window/TittleTattleWindow';
import { TittleTattleWindowUser } from '../../context/user/User.context';
import { TittleTattlePic } from '../TittleTattle-pic/TittleTattlePic';

import './TittleTattle.css';

// add all 3 props type
type TittleTattleProps = IStateProps & IDispatchProps & IOwnProps;

export interface ITittleTattleState {
}

export class TittleTattle extends React.Component<TittleTattleProps, ITittleTattleState> {

    constructor(props: TittleTattleProps) {
        super(props);

        this.onAddMessage = this.onAddMessage.bind(this);
    }

    /**
     *
     * @param {ITittleTattleMessage} message
     */
    onAddMessage(message: string) {
        const {user} = this.props;
        const {addMessage} = this.props.actions;
        addMessage({
            user,
            text: message,
            date: new Date()
        });
    }

    render() {

        const {
            messages,
            user
        } = this.props;
        //tslint:disable
        return (
            <Container className="tittletattle">
                <Row className='tittletattle-header'>
                    <Col>
                        <TittleTattlePic src={user.pic}
                                   alt={`${user.name} profile picture`}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*
                          * in case on first node on user.id=1 Foo
                          * render the HOC <TittleTattleWindowUser/>
                          *
                          * On second user Bar, render a classic component
                          */}
                        {user.id === 1
                            ? <TittleTattleWindowUser messages={messages}/>
                            : <TittleTattleWindow messages={messages} userId={user.id}/>}
                    </Col>
                </Row>
                <Row className='tittletattle-footer'>
                    <Col>
                        <TittleTattleInput onAddMessage={this.onAddMessage}/>
                    </Col>
                </Row>
                {/* call a tittletattle window with hoc */}
                {/*<Row><Col>{user.id === 1 ? <TittleTattleWindowUserWithHOC messages={messages}/> : <p>Nothing provide</p>}</Col></Row>*/}
            </Container>
        );
    }
}
