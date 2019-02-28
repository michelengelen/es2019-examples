import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { routeConfigs as config } from 'constants/routeConfigs';

import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const drawerWidth = 420;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    padding: theme.spacing.unit * 2,
  },
  nestedNav: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.renderNavigationList = this.renderNavigationList.bind(this);
    this.handleSubnavClick = this.handleSubnavClick.bind(this);

    this.state = {
      openSubnav: '',
    };
  }

  handleSubnavClick(key) {
    return () => {
      this.setState(prevState => ({
        openSubnav: key !== prevState.openSubnav ? key : '',
      }));
    };
  }

  componentDidMount() {
    const { openSubnav } = this.state;
    const { paths, location } = this.props;

    const parentPaths = paths.filter(path => Array.isArray(path.subPaths));
    // const childPaths =
  }

  renderNavigationList(paths, nested = false) {
    const { classes, history, location } = this.props;
    const { openSubnav } = this.state;
    return (
      <List component={nested ? 'div' : 'nav'} disablePadding={nested}>
        {paths.map(({ key, icon, subPaths }) => (
          <div key={key}>
            <ListItem
              button
              onClick={
                !!config[key].path
                  ? () => history.push(config[key].path)
                  : this.handleSubnavClick(key)
              }
              selected={config[key].path === location.pathname}
              className={nested ? classes.nestedNav : null}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={config[key].name} />
              {Array.isArray(subPaths) ? (
                openSubnav === key ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {Array.isArray(subPaths) && (
              <Collapse in={openSubnav === key} timeout="auto" unmountOnExit>
                {this.renderNavigationList(subPaths, true)}
              </Collapse>
            )}
          </div>
        ))}
      </List>
    );
  }

  render() {
    const { classes, location, children, paths } = this.props;

    const currentPathKey = Object.keys(config).filter(
      key => config[key].path === location.pathname,
    )[0];
    const currentPageTitle = currentPathKey ? config[currentPathKey].name : 'Seite nicht gefunden';

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {currentPageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar}>
            <Typography variant="h6" color="textSecondary">
              ECMAScript 2019
            </Typography>
          </div>
          <Divider />
          {this.renderNavigationList(paths)}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>
            <Grid item lg={2} md={1} sm={false} />
            <Grid item lg={8} md={10} sm={12}>
              {children}
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object,
  paths: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles)(withRouter(Navigation));
