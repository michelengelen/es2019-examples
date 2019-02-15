import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'container/navigation';
import NoMatch from 'container/nomatch';
import Home from 'container/home';

const paths = [
  {
    path: '/',
    name: 'Einleitung',
    component: Home,
    exact: true,
  },
];

const AppRouter = () => (
  <Router>
    <Navigation paths={paths}>
      <Switch>
        {paths.map(path => (
          <Route {...path} key={`route_${path.name}`}/>
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Navigation>
  </Router>
);

export default AppRouter;
