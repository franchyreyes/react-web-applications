import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import LoadingMessage from '../loading/loading'
import "./TodoList.css";
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, updateTodoRequest } from '../../thunks/thunk'



const TodoList = ({ todos, isLoading, onRemovePressed, onCompletedPressed, startLoadingTodo }) => {
    useEffect(() => {
        startLoadingTodo();
    }, []);

    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(
                todo => <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
            )}
        </div>
    );

    return isLoading ? <LoadingMessage /> : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodo: text => dispatch(loadTodos()),
    //onDisplayAlertClicked: (text) => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);