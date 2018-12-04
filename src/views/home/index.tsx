import * as React from 'react';
import { Link } from 'react-router-dom';


export interface IAppProps {
}

export default class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
          <Link to="/about">about</Link>
      </div>
    );
  }
}
