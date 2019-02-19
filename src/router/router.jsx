import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import CodeIcon from '@material-ui/icons/Code';
import ScheduleIcon from '@material-ui/icons/Schedule';

import ScrollToTop from './scrollToTop';

import Navigation from 'container/navigation';
import NoMatch from 'container/nomatch';
import EsIntroduction from 'pages/esIntroduction';
import EsHistory from 'pages/esHistory';
import FeatureOverview from 'pages/featureOverview';
import FeatureArrayFlat from 'pages/featureArrayFlat';
import FeatureArrayFlatmap from 'pages/featureArrayFlatmap';

const paths = [
  {
    path: '/',
    name: 'Einleitung',
    component: EsIntroduction,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    path: '/history',
    name: 'ES10 Historie',
    component: EsHistory,
    icon: <ScheduleIcon />,
    exact: true,
  },
  {
    path: '/overview',
    name: 'ES10 Features',
    component: FeatureOverview,
    icon: <NewReleasesIcon />,
    exact: true,
  },
  {
    path: '/overview/es10-flat',
    name: 'Array.prototype.flat()',
    component: FeatureArrayFlat,
    icon: <CodeIcon />,
    exact: true,
  },
  {
    path: '/overview/es10-flatMap',
    name: 'Array.prototype.flatmap()',
    component: FeatureArrayFlatmap,
    icon: <CodeIcon />,
    exact: true,
  },
];

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <Navigation paths={paths}>
        <Switch>
          {paths.map(path => (
            <Route {...path} key={`route_${path.name}`} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Navigation>
    </ScrollToTop>
  </Router>
);

export default AppRouter;
