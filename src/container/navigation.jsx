import React from 'react';
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

import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

const drawerWidth = 320;

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
});

const NavigationList = props => (
  <List>
    {props.paths.map(({ path, currentPath, name, icon }) => (
      <Link to={path}>
        <ListItem button key={name} selected={path === props.currentPath}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      </Link>
    ))}
  </List>
);

const Navigation = withRouter(props => {
  const { classes, location, children, paths } = props;

  const currentPathTitle = paths.filter(path => path.path === location.pathname)[0].name;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {`${currentPathTitle}`}
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
        <NavigationList paths={paths} currentPath={location.pathname} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <Grid item lg={3} md={2} sm={false} />
          <Grid item lg={6} md={8} sm={12}>
            {children}
          </Grid>
        </Grid>
      </main>
    </div>
  );
});

Navigation.propTypes = {
  classes: PropTypes.object,
  paths: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles)(Navigation);
