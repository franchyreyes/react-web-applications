import React from 'react';
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import HeaderContainer from './components/common/Header.js';
import HomePage from './pages/home/HomePage.js';
import { Switch, Route } from 'react-router-dom';
import TodoPage from './pages/todo/TodoPage.js';
import AppFooter from './components/common/Footer.js';

const AppContainer = styled.div`
    
    margin: auto;    
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 960px;  
`;

const Main = styled.div`
    background-color: black;
    height: 50px;    
    width: 100%;
`;

const App = () => (
    <Main>
        <AppContainer>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/task" component={TodoPage} />
            </Switch>
        </AppContainer>
        <AppFooter />
    </Main>
);

export default hot(module)(App);