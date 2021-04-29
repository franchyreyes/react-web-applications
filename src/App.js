import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader'
import TodoList from './components/todos/TodoList.js';





const App = () => (
    <div className="App">
        <TodoList />
    </div>

);

export default hot(module)(App);