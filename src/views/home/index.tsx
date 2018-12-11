import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Todos, AppState } from '@types';
import { addTodoActionCreator, deleteTodoActionCreator } from '@actions';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import './style.scss';

export interface IAppProps extends RouteComponentProps {
  todos: Todos;
  addTodo: (name: string) => {};
  deleteTodo: (index: number) => {};
}
class IApp extends React.Component<IAppProps, any> {

  private handlers = {
    addTodo: () => {
      let nextTodoName = window.prompt("enter you next todo item");
      this.props.addTodo(nextTodoName);
    },
    deleteTodo: (index: number) => {
      this.props.deleteTodo(index);
    }
  }

  public render() {
    const { todos = [] } = this.props;
    return (
      <div className='todo-list'>
        <ul>
          {
            todos.map((item, index) => {
              return <li
                key={item.id}
                onClick={this.handlers.deleteTodo.bind(this, index)}
                className={`${item.checked ? 'checked' : ''}`}
              >
                {item.name}
              </li>
            })
          }
        </ul>
        <div>
          <button onClick={this.handlers.addTodo}>add</button>
        </div>
        <div className='test-css'></div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addTodo: (nextTodoName: string) => {
      dispatch(addTodoActionCreator(nextTodoName))
    },
    deleteTodo: (index: number) => {
      dispatch(deleteTodoActionCreator(index))
    }
  }
}

export default withRouter<RouteComponentProps>(connect(mapStateToProps, mapDispatchToProps)(IApp));