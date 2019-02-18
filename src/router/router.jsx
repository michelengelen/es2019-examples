import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';

import Navigation from 'container/navigation';
import NoMatch from 'container/nomatch';
import Home from 'pages/home';
import FeatureOverview from 'pages/featureOverview';
import FeatureArrayFlat from 'pages/featureArrayFlat';
import FeatureArrayFlatmap from 'pages/featureArrayFlatmap';

const paths = [
  {
    path: '/',
    name: 'Einleitung',
    component: Home,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    path: '/overview',
    name: 'ES10 Features',
    component: FeatureOverview,
    icon: <StarIcon />,
    exact: true,
  },
  {
    path: '/overview/es10-flat',
    name: 'Array.prototype.flat()',
    component: FeatureArrayFlat,
    icon: <StarIcon />,
    exact: true,
  },
  {
    path: '/overview/es10-flatMap',
    name: 'Array.prototype.flatmap()',
    component: FeatureArrayFlatmap,
    icon: <StarIcon />,
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
