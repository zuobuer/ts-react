import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

let pid = 0;

export const addTodoActionCreator: ActionCreator<Action> = (name: string) => {
    return {
        type: "ADD_TODO",
        payload: {
            name,
            checked: false,
            id: ++pid,
        },
    }
}

export const deleteTodoActionCreator: ActionCreator<Action> = (index: number) => {
    return {
        type: "DELETE_TODO",
        paylod: index,
    }
}


export const reduxActionCreator: ActionCreator<Action> = (name: string) => {
    return {
        type: "ADD_TODO",
        payload: {
            name,
            checked: false,
            id: ++pid,
        },
    };
};

export const thunkActionCreator: ActionCreator<ThunkAction<Action, {}, undefined, Action>> = (name: string) => {
    return (dispatch: Dispatch<Action>, getState: () => void): Action => {
        return dispatch({
            type: "ADD_TODO",
            payload: {
                name,
                checked: false,
                id: ++pid,
            },
        });
    };
};


export const asyncThunkActionCreator: ActionCreator<
    ThunkAction<Promise<Action>, {}, undefined, Action>
    > = (name: string) => {
        return async (dispatch: Dispatch<Action>, getState: () => void): Promise<Action> => {
            try {
                let p = dispatch({
                    type: "ADD_TODO",
                    payload: {
                        name,
                        checked: false,
                        id: ++pid,
                    },
                });
                return p;
            } catch (e) { }
        };
    };

