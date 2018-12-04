import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './route';

ReactDOM.render(<div>
    <Router><Route /></Router>
</div>, document.getElementById("root"))