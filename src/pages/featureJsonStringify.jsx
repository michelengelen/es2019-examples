import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
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

const jsonStringifyBefore = `// compare stringified and string in ES2018
console.log(JSON.stringify('\\u{D800}') === '"\\u{D800}"');
// expected result: false`;

const jsonStringifyAfter = `// compare stringified and string in ES2019
console.log(JSON.stringify('\\u{D800}') === '"\\\\ud800"');
// expected result: true`;

const FeatureJsonStringify = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>JSON.stringify()</Code> Formatierung
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Gemäß des{' '}
            <Link href="https://tools.ietf.org/html/rfc8259#section-8.1">RFC for JSON</Link> muss
            ein <em>öffentlicher</em> Austausch von JSON in UTF-8 kodierung erfolgen. Das kann zu
            Problemen führen, wenn <Code>JSON.stringify()</Code> eingesetzt wird, denn es ist
            potentiell möglich, dass einzelne Zeichen in UTF-16 kodiert werden, die nicht wieder in
            UTF-8 umgewandelt werden können.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Wie genau kann das aber passieren?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enthält ein String einen sogenannten <em>lone surrogate</em> (das sind Zeichen aus dem
            Raum zwischen 0xD800 und 0xDFFF), dann produziert <Code>JSON.stringify()</Code> einen
            String mit einem <em>lone surrogate</em>
          </Typography>
          <CodeBox code={jsonStringifyBefore} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            <em>lone surrogates</em> können nicht in UTF-8 kodiert werden, weshalb diese Anpassung
            die Ausgabe solcher Zeichen mithilfe von <em>code unit escape sequences</em> wieder dem
            Standard angleicht.
          </Typography>
          <CodeBox code={jsonStringifyAfter} />
        </Grid>
      </Grid>
    </div>
  );
});

FeatureJsonStringify.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureJsonStringify);
