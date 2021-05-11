import { expect } from 'chai'
import { todos } from '../reducers/TodoReducers'

describe("the todos reducer", () => {
    it('Adds  a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'test', isCompleted: false };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            },
        };
        // The structure of our real state app
        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo],
        };
        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});