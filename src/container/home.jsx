import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
  section: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
});

const Home = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Einleitung
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Woher kommen all diese coolen neuen Prototyp-Funktionen? Wer oder was definiert JavaScript? Und was genau ist eigentlich dieses <code>ECMAScript</code>?
          </Typography>
          <Typography variant="body2" gutterBottom>
            Many of us know that there is a standard procedure for Javascript’s latest releases and a committee behind that. In this post, I will explain about who makes the final call on any new specification, what is the procedure for it, and what's new in ES2019.

            The language specification that drives JavaScript is called ECMAScript. There is a team behind that called <code>Technical Committee 39 [TC39]</code> that reviews every specification before adopting.

            Every change goes through a process with stages of maturity.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

Home.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(Home);
