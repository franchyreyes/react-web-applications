import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from '../../thunks/thunk'
import { getTodos } from './selectors';
import styled from 'styled-components'

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const FormTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const FormTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <FormContainer>
            <FormTodoInput
                type="text"
                placeholder="Add Value"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <FormTodoButton
                onClick={() => {
                    const isDuplicate = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicate) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >Create Todo</FormTodoButton>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state),
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);