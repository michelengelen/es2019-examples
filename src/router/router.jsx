import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import CodeIcon from '@material-ui/icons/Code';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DevicesIcon from '@material-ui/icons/ImportantDevices';

import ScrollToTop from './scrollToTop';

import Navigation from 'container/navigation';
import NoMatch from 'container/nomatch';
import EsIntroduction from 'pages/esIntroduction';
import EsHistory from 'pages/esHistory';
import FeatureOverview from 'pages/featureOverview';
import FeatureArrayFlat from 'pages/featureArrayFlat';
import FeatureArrayFlatmap from 'pages/featureArrayFlatmap';

import { routeConfigs as config } from 'constants/routeConfigs';

const paths = [
  {
    key: 'esIntroduction',
    component: EsIntroduction,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    key: 'esHistory',
    component: EsHistory,
    icon: <ScheduleIcon />,
    exact: true,
  },
  {
    key: 'es2019Features',
    icon: <DevicesIcon />,
    subPaths: [
      {
        key: 'es2019Features_overview',
        component: FeatureOverview,
        icon: <NewReleasesIcon />,
        exact: true,
      },
      {
        key: 'es2019Features_arrayFlat',
        component: FeatureArrayFlat,
        icon: <CodeIcon />,
        exact: true,
      },
      {
        key: 'es2019Features_arrayFlatmap',
        component: FeatureArrayFlatmap,
        icon: <CodeIcon />,
        exact: true,
      },
    ],
  },
];

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    lineHeight: 18,
  },
  body1: {
    lineHeight: 2,
  },
});

const renderRoutes = routes =>
  routes.map(route => {
    if (Array.isArray(route.subPaths)) return renderRoutes(route.subPaths);

    return (
      <Route
        {...route}
        path={config[route.key].path}
        name={config[route.key].name}
        key={`route_${route.key}`}
      />
    );
  });

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <MuiThemeProvider theme={theme}>
        <Navigation paths={paths}>
          <Switch>
            {renderRoutes(paths)}
            <Route name="Seite nicht gefunden" component={NoMatch} />
          </Switch>
        </Navigation>
      </MuiThemeProvider>
    </ScrollToTop>
  </Router>
);

export default AppRouter;
