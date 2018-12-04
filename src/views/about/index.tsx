import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

export interface IAppProps extends RouteComponentProps {
}
class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
          <Link to='/'>home</Link>
      </div>
    );
  }
}
export default withRouter(IApp)