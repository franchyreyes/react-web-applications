import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import LoadingMessage from '../loading/loading'
import "./TodoList.css";
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, updateTodoRequest } from '../../thunks/thunk'
import { getTodos, getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors';



const TodoList = ({ completedTodos, inCompletedTodos, isLoading, onRemovePressed, onCompletedPressed, startLoadingTodo }) => {
    useEffect(() => {
        startLoadingTodo();
    }, []);

    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Completed</h3>
            {completedTodos.map(
                todo => <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
            )}
            <h3>Incompleted</h3>
            {inCompletedTodos.map(
                todo => <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
            )}
        </div>
    );

    return isLoading ? <LoadingMessage /> : content;
};

const mapStateToProps = state => ({
    completedTodos: getCompleteTodos(state),
    inCompletedTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodo: text => dispatch(loadTodos()),
    //onDisplayAlertClicked: (text) => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);