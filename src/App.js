import React from 'react';
import Container from './component/HOC/Container';
import {
   Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './component/common/Header';
import Home from './pages/Home';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import history from './history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router history={history}>
            <ToastContainer />
            <Header />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/adduser" exact component={AddEditUser} />
                    <Route path="/edituser/:id" exact component={AddEditUser} />
                    <Route path="/userinfo/:id" exact component={UserInfo} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;
