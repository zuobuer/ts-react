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

export interface TodoAction extends Action {
    payload: any,
}