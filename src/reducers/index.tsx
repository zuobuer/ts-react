import { combineReducers } from 'redux';
import { Todos, AddTodoAction, DeleteTodoAction } from '@types';

let todoId: number = 0;
const reducers = combineReducers({
    todos: (todos: Todos = [], action: AddTodoAction & DeleteTodoAction) => {
        switch (action.type) {
            default:
                return todos;
            case "ADD_TODO":
                return [...todos, action.payload];
            case "DELETE_TODO":
                return todos.map((todo, index) => {
                    if (index === action.payload.index) {
                        return Object.assign({}, todo, { checked: true })
                    }
                    return todo
                })
        }
    }
})

export default reducers;