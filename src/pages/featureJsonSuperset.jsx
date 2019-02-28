import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CodeBox from 'components/codeBox';
import Code from 'components/code';

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
  spacerDiv: {
    display: 'inline-block',
    margin: `${theme.spacing.unit * 1.5}px 0`,
  },
  spacer: {
    margin: `${theme.spacing.unit * 1.5}px 0`,
  },
  section: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  stretch: {
    display: 'flex',
    alignItems: 'stretch',
  },
});

const jsonSupersetBefore = `// string literails cannot contain line- and paragraph separators
const sourceCode = '"\\u2028"';
eval(sourceCode);
// expected result: SyntaxError`;

const jsonSupersetAfter = `// JSON data can contain these characters
const json = '"\\u2028"';
JSON.parse(json);
// expected reault: no error`;

const FeatureJsonSuperset = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>JSON</Code> Superset
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Im Moment ist <Code>JSON</Code> (standardisiert in{' '}
            <Link href="http://www.ecma-international.org/publications/standards/Ecma-404.htm">
              ECMA-404
            </Link>
            ) kein Superset von ECMAScript:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bisher war es nicht möglich <em>U+2028 LINE SEPARATOR</em> und{' '}
            <em>U+2029 PARAGRAPH SEPARATOR</em> in einem JavaScript String Literal ohne escape
            sequences zu nutzen.
          </Typography>
          <CodeBox code={jsonSupersetBefore} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            <Code>JSON</Code> String Literale hingegen können diese Zeichen enthalten:
          </Typography>
          <CodeBox code={jsonSupersetAfter} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Da diese Restriktionen für <Code>JSON</Code> nicht gelten wurde die Entscheidung
            getroffen diese Einschränkung auch für ECMAScript zu entfernen um die Spezifikationen
            hierzu zu vereinheitlichen und potentielle Formatierungsfehler im Vorhinein
            auszuschließen.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

FeatureJsonSuperset.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureJsonSuperset);
