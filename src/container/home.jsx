import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'stretch',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  section: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
});

const Home = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Paper className={classes.paper}>
          <Grid className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Introduction
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
});

Home.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(Home);
