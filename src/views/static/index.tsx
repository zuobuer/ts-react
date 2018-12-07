import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface IAppProps extends RouteComponentProps {
}

 class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default withRouter<IAppProps>(IApp);

