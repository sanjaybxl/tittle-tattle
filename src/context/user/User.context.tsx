import * as React from 'react';
import { ITittleTattleUser } from '../../model/user';
import {
    TittleTattleWindow,
    IChatWindowProps
} from '../../component/TittleTattle-window/TittleTattleWindow';
import { ReactType } from 'react';
import { user1pic } from '../../images';
// import { Button } from 'reactstrap';

// This file contain example of how to handle React 16.3 context API
// base on react doc
// @link https://reactjs.org/docs/context.html

// default value of context
export const defaultUserContext: ITittleTattleUser = {
    id: 1,
    name: 'Foo',
    pic: `${user1pic}`
};

// creation of user context
// avoid compilation error on the new api context with any type def
// and use default value
export const UserContext = (React as any).createContext({
    // user: defaultUserContext,
    // toggleUser: () => ({id: 3, name: 'Baz'})
});

export interface IUserProviderState {
    user: ITittleTattleUser;
    toggleUser: () => any;
}

// provide a context containing a user
// and a method to toggle user
export class UserProvider extends React.Component<{}, IUserProviderState> {

    constructor(props: any) {
        super(props);
        // @link https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            user: defaultUserContext,
            toggleUser: this.toggleUser,
        };
    }

    toggleUser = () => {
        // tslint:disable:align
        this.setState((state: IUserProviderState) => ({
                user: state.user.id === 1
                    ? {id: 3, name: 'Baz', pic: ''}
                    : defaultUserContext
            }),
            () => console.log('Toggle user from context new user', this.state.user));
        // tslint:enable
    }

    render() {
        return (
            // The entire state is passed to the provider
            <UserContext.Provider value={this.state}>
                {/*<Button onClick={this.toggleUser}>ToggleUser from UserProvider component</Button>*/}
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

// in case of one component consume the context
export class TittleTattleWindowUser extends React.Component<IChatWindowProps> {
    render() {
        return (
            <UserContext.Consumer>
                {({user}: IUserProviderState) => (<TittleTattleWindow userId={user.id} {...this.props}/>)}
            </UserContext.Consumer>
        );
    }
}

// in case of multiple component consume the same user id context
// build an high order component withContext
// This function takes a component..
// typed HOC @link https://stackoverflow.com/a/31815634
export const withUserId = (Component: ReactType) =>
    // ...and returns another component..
    (props: any) =>
        // ... and renders the wrapped component with the context user id!
        // Notice that we pass through any additional props as well
        (
            <UserContext.Consumer>
                {({user}: IUserProviderState) => (<Component userId={user.id} {...props}/>)}
            </UserContext.Consumer>
        );

// Now any component that depends on the user id context can easy subscribe to it
// same as the <TittleTattleWindowUser/> class define line 71
export const TittleTattleWindowUserWithHOC: React.SFC<IChatWindowProps> = withUserId(TittleTattleWindow);
