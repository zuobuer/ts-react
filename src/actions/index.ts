import { AddTodoAction, DeleteTodoAction } from '@types';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


const reduxAction: ActionCreator<Action> = (text: string) => {
    return {
        type: "SET_TEXT",
        text
    };
};

const thunkAction: ActionCreator<ThunkAction<Action, {}, undefined, Action>> = (text: string) => {
    return (dispatch: Dispatch<Action>, getState: () => void): Action => {
        return dispatch({
            type: "SET_TEXT",
            text
        });
    };
};


const asyncThunkAction: ActionCreator<
    ThunkAction<Promise<Action>, {}, undefined, Action>
    > = () => {
        return async (dispatch: Dispatch<Action>, getState: () => void): Promise<Action> => {
            try {
                //   const text = await Api.call();
                return dispatch({
                    type: "SET_TEXT",
                    text: "text"
                });
            } catch (e) { }
        };
    };







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


