import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState, Todos } from '@types';
import { Dispatch, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface IAppProps extends RouteComponentProps {
  todos: Todos,
  asyncAction: () => void
}

class IApp extends React.Component<IAppProps, any> {

  componentDidMount() {
    this.props.asyncAction()
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

let todoId = 1;

const mapDispatchToProps = (dispatch: ThunkDispatch<void, undefined, Action>) => {
  return {
    asyncAction: () => {
      dispatch({
        type: "ADD_TODO",
        payload: {
          name: "hello world",
          checked: false,
          id: ++todoId,
        }
      })
    }
  }
}


export default withRouter<RouteComponentProps>(connect(mapStateToProps, mapDispatchToProps)(IApp));

