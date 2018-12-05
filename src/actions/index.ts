import { AddTodoAction, DeleteTodoAction } from '@types';

let todoId: number = 0;

export const addTodoActionCreator = (name: string): AddTodoAction => {
    return {
        type: "ADD_TODO",
        payload: {
            name: name,
            checked: false,
            id: ++todoId,
        }
    }
}

export const deleteTodoActionCreator = (index: number): DeleteTodoAction => {
    return {
        type: "DELETE_TODO",
        payload: {
            index: index
        }
    }
}