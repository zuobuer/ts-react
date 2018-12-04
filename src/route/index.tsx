import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './../views/home';
// import About from './../views/about';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */"./../views/home"))
const About = React.lazy(() => import(/* webpackChunkName: "about" */"./../views/about"))

// import Home from '@views/home';
// import About from '@views/about';

const R = () => <React.Suspense fallback={<div>loading</div>}>
    <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
    </Switch>
</React.Suspense>



export default R;