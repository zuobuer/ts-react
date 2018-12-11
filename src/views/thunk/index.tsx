import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState, Todos } from '@types';
import { Dispatch, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  addTodoActionCreator,
  asyncThunkActionCreator,
} from '@actions';

export interface IAppProps extends RouteComponentProps {
  todos: Todos;
  asyncAddItem: (name: string) => void;
  // dispatch: (action: Action) => void,
}

class IApp extends React.Component<IAppProps, any> {

  componentDidMount() {
    // this.props.dispatch(addTodoActionCreator(name))
    this.props.asyncAddItem("world");
  }

  public render() {
    const { todos } = this.props;
    return (
      <div>
        {
          todos.map((item, index) => {
            return <li
              key={item.id}
            >
              {item.name}
            </li>
          })
        }
      </div>
    );
  }
}


const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, undefined, Action>) => {
  return {
    asyncAddItem: (name: string) => {
      dispatch(asyncThunkActionCreator(name)).then(()=>{
        console.log("async thunk dispatch")
      })
    }
  }
}


export default withRouter<RouteComponentProps>(connect(mapStateToProps, mapDispatchToProps)(IApp));

