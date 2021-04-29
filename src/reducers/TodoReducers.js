import { CREATE_TODO, MARK_COMPLETED_TODO, REMOVE_TODO } from '../actions/TodoActions'

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {

            return state.filter(todo => todo.text !== payload.text);
        }
        case MARK_COMPLETED_TODO: {
            const { text } = payload;
            return state.map(
                todo => {
                    if (todo.text === text) {
                        return { ...todo, isCompleted: true };
                    }
                    return todo;
                }
            )
        }

        default:
            return state;
    }
};