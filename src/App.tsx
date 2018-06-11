import * as React from 'react';
import './App.css';
import { tittletattleStore } from './store';
import { Provider } from 'react-redux';
import { TittleTattleConnected } from './component/TittleTattle';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    UserProvider,
    UserContext,
    IUserProviderState
} from './context/user/User.context';
import { CSSProperties } from 'react';
import {
    bg,
    user2pic
} from './images';

const appDivStyle: CSSProperties = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(15px)'
};

class App extends React.Component {

    render() {
        // tslint:disable
        return (
            <Provider store={tittletattleStore}>
                <div className='App'>
                    <Container>
                        <Row>
                            <Col>
                                {/*
                                  * For the first TittleTattle component
                                  * Test of the new react context api
                                  *
                                  * @link https://reactjs.org/docs/context.html#when-to-use-context
                                  * */}
                                <UserProvider>
                                    <UserContext.Consumer>
                                        {({user, toggleUser}: IUserProviderState) => (
                                            // react fragment
                                            <>
                                                < TittleTattleConnected user={user}/>
                                                {/*
                                                  * Use to toggle user from the context
                                                  * provide by <UserProvider/>
                                                  * */}
                                                {/*<Button onClick={toggleUser}>
                                                    ToggleUser from parent component
                                                </Button>*/}
                                            </>
                                        )}
                                    </UserContext.Consumer>
                                </UserProvider>
                            </Col>
                            <Col>
                                {/*
                                  * The second TittleTattle component have a simple user props
                                  * */}
                                <TittleTattleConnected user={{
                                    id: 2,
                                    name: 'Bar',
                                    pic: `${user2pic}`
                                }}/>
                            </Col>
                        </Row>
                    </Container>
                    <div className='bg'
                         style={appDivStyle}></div>
                </div>
            </Provider>
        );
    }
}

export default App;
