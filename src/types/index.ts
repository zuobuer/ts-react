import { Action } from 'redux';


/// state.todos 分支
export interface TodoItem {
    name: string;
    checked: boolean;
    id: number;
}
export type Todos = Array<TodoItem>;

export interface AppState {
    todos: Todos
}


// state action 分支
export interface AddTodoAction extends Action {
    payload: TodoItem
}

export interface DeleteTodoAction extends Action{
    payload: {
        index: number;
    }
}

