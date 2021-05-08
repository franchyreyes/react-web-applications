import {
    CREATE_TODO,
    MARK_COMPLETED_TODO,
    REMOVE_TODO,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS
} from '../actions/TodoActions'

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo)
            };
        }
        case REMOVE_TODO: {
            const { todo: removedTodo } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== removedTodo.id)
            };
        }
        case MARK_COMPLETED_TODO: {
            const { todo: updateTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === updateTodo.id) {
                        return updateTodo;
                    }
                    return todo;
                }),
            };
        }

        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos
            }
        }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
};