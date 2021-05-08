import {
    CREATE_TODO,
    MARK_COMPLETED_TODO,
    REMOVE_TODO,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS
} from '../actions/TodoActions'


export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            {
                return true;
            }
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_SUCCESS:
            {
                return false;
            }
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const { todo: removedTodo } = payload;
            return state.filter(todo => todo.id !== removedTodo.id);
        }
        case MARK_COMPLETED_TODO: {
            const { todo: updateTodo } = payload;
            return state.map(
                todo => {
                    if (todo.id === updateTodo.id) {
                        return updateTodo;
                        //return { ...todo, isCompleted: updateTodo.isCompleted };
                    }
                    return todo;
                }
            )
        }

        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_IN_PROGRESS:
        default:
            return state;
    }
};