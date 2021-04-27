import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader'
import TodoList from './components/todos/TodoList.js';


const todos = [{ "text": "Ronald" },
{ "text": "Reyes" },
{ "text": "Franchy" },
{ "text": "Yango" }];


const App = () => (
    <div className="App">
        <TodoList todos={todos} />
    </div>

);

export default hot(module)(App);