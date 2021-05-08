import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./NewTodoForm.css";
import { addTodoRequest } from '../../thunks/thunk'
import { getTodos } from './selectors';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Add Value"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    const isDuplicate = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicate) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);