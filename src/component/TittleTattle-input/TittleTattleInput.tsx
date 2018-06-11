import * as React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import './TittleTattleInput.css';

export interface ITittleTattleInputProps {
    onAddMessage: (message: string) => any;
}

export interface ITittleTattleInputState {
    message: string;
}

/**
 *
 * @param {IChatWindowProps & {children?: React.ReactNode}} props
 * @returns {any}
 * @constructor
 */
export class TittleTattleInput extends React.Component<ITittleTattleInputProps, ITittleTattleInputState> {

    constructor(props: ITittleTattleInputProps) {
        super(props);
        this.state = {message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
        // do not send empty message
        if (this.state.message.length > 0) {
            // handle new message
            this.onAddMessage(this.state.message);
            // reset input state
            this.setState({message: ''});
        }
    }

    /**
     *
     * @param {string} message
     */
    onAddMessage(message: string) {
        const {onAddMessage} = this.props;
        // dispatch new message to parent component
        onAddMessage(message);
    }

    render() {
        //tslint:disable
        return (
            <Form onSubmit={this.handleSubmit}
                  className='tittletattle-input'>
                <FormGroup>
                    <InputGroup>
                        <Input value={this.state.message}
                               onChange={this.handleChange}
                               placeholder='Type message...'/>
                        <InputGroupAddon addonType="prepend">
                            <Button type='submit'>Send</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}
