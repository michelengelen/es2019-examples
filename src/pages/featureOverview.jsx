import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Code from 'components/code';
import { routeConfigs, routeSubHeader } from '../constants/routeConfigs';

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
    height: '100%',
  },
  spacer: {
    margin: `${theme.spacing.unit * 1.5}px 0`,
  },
  section: {
    margin: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
  },
  stretch: {
    display: 'flex',
    alignItems: 'stretch',
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,.05)',
  },
  quote: {
    padding: `${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 4}px`,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.05)',
    fontStyle: 'italic',
  },
});

class FeatureOverview extends PureComponent {
  constructor(props) {
    super(props);

    this.getNavIcon = this.getNavIcon.bind(this);
  }

  getNavIcon(href) {
    const { history } = this.props;
    return (
      <ListItemSecondaryAction>
        <IconButton aria-label="got to Page" onClick={() => history.push(href)}>
          <ChevronRightIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );
  }

  render() {
    const { classes } = this.props;
    let routeType = 0;

    return (
      <div className={classes.root}>
        <Grid container className={classes.content} spacing={24}>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Kurz vorweg
            </Typography>
            <Typography paragraph variant="body1" gutterBottom>
              Die implementierten Features in den ECMAScript Versionen sind nicht zwangsläufig alles
              was an Hilfsmitteln geboten wird. Es ist unter bestimmten Vorraussetzungen möglich
              auch Features zu nutzen, die es nicht in das neue Release geschafft haben. Nutzt man
              zum Beispiel <Code>node</Code> im Terminal kann man bestimmte Features (oder
              Featuresets) aktivieren und nutzen, die es nicht bis in die Stufe 4 und in das Release
              geschafft haben. Diese sind zwar mit Vorsicht einzusetzen, da nicht immer garantiert
              ist, dass sie fehlerfrei funktionieren, aber es ist grundsätzlich möglich. Auch einige
              der browserseitigen JavaScript Cores haben Features aus den Stufen 2-4 implementiert.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Zitat hierzu von <Link href="https://twitter.com/v8js">@v8js</Link> auf Twitter:
            </Typography>
            <div className={classes.quote}>
              As of V8 v7.3 / Chrome 73, all of these ES2019 features are available by default.
              Enjoy!
            </div>
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Was ist neu in ES2019?
            </Typography>
            <Paper>
              <List subheader={<li />}>
                {Object.keys(routeConfigs).map((key, index) => {
                  if (isNaN(routeConfigs[key].type)) return null;
                  let subHeader = null;
                  if (routeConfigs[key].type === routeType) {
                    subHeader = (
                      <ListSubheader className={classes.subHeader}>
                        {routeSubHeader[routeConfigs[key].type]}
                      </ListSubheader>
                    );
                    routeType++;
                  }

                  return (
                    <div key={`es2019overView_${routeConfigs[key].path}`}>
                      {subHeader}
                      <ListItem divider={Object.keys(routeConfigs).length !== index + 1}>
                        <ListItemText
                          primary={routeConfigs[key].primary}
                          secondary={routeConfigs[key].secondary}
                        />
                        {this.getNavIcon(routeConfigs[key].path)}
                      </ListItem>
                    </div>
                  );
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

FeatureOverview.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(withStyles(styles)(FeatureOverview));
