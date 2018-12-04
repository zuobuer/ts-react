import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';


export interface IAppProps extends RouteComponentProps {
}
class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
          <Link to="/about">about</Link>
      </div>
    );
  }
}

export default withRouter(IApp);