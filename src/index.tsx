import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Route from './route';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
    <Router><Route /></Router>
</Provider>, document.getElementById("root"))