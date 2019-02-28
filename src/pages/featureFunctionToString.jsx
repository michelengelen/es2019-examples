import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CodeBox from 'components/codeBox';
import Code from 'components/code';
import Divider from '@material-ui/core/Divider/Divider';

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

const functionECMAScript = `class C { foo() { /*hello*/ } }
console.log(C.prototype.foo.toString());
// expected result: 'foo() { /*hello*/ }'`;

const functionECMAScriptModel =
  '"function" BindingIdentifier? "(" FormalParameters ")" "{ [native code] }"';

const functionECMAScriptObjects = `console.log(isNaN.toString());
// expected result: 'function isNaN() { [native code] }'

console.log(Math.pow.toString());
// expected result: 'function pow() { [native code] }'`;

const FeatureFunctionToString = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>Function.prototype.toString()</Code> Revision
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography component="div" variant="body1" paragraph>
            Diese Feature-Anpassung beinhaltet zwei grundlegende Verbesserungen gegenüber
            ECMAScript2016:
            <ol>
              <li>
                Wenn möglich (return des <em>Function source code</em>): Wird eine Funktion via
                ECMAScript source code generiert muss <Code>toString()</Code> diesen auch ausgeben.
                In ES2016 war dies den Engines überlassen.
              </li>
              <li>
                Andernfalls (return eines <em>standardisierten Platzhalters</em>): Wenn, in ES2016,
                die <Code>toString()</Code> Methode keinen syntaktisch validen ECMAScript Code
                generieren konnte musste diese einen String generieren, der bei Nutzung von{' '}
                <Code>eval()</Code> einen <Code>Syntaxerror</Code> wirft. In anderen Worten durfte
                <Code>eval()</Code> den Code nicht parsen können. Dieser Ansatz war nicht
                zukunftssicher, denn es ist nicht unwahrscheinlich, dass Code, der so generiert
                wurde nicht mit zukünftigen Versionen kompatibel sein könnte. Um diesem
                entgegenzuwirken wird in einem solchen Fall nun anstelle des Strings ein Platzhalter
                (<Code>{'{ [native code] }'}</Code>) eingesetzt.
              </li>
            </ol>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Funktionen, die in ECMAScript code definiert worden sind müssen den function body
            ausgeben:
          </Typography>
          <CodeBox code={functionECMAScript} />
          <blockquote>
            <Typography variant="h6" gutterBottom>
              <span role="img" aria-label="warning-icon">
                ⚠
              </span>
              ️ Bitte beachten:
            </Typography>
            <Divider className={classes.spacer} />
            <Typography variant="body1">
              <Code>toString()</Code> kann Code wiedergeben, der nur in einem bestimmten Kontext
              syntaktisch valide ist.
            </Typography>
          </blockquote>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            <em>Built-in function objects</em>, <em>bound function exotic objects</em> and{' '}
            <em>callable objects</em> welche nicht in EMCAScript code definiert wurden müssen in er
            Ausgabe von <Code>toString()</Code> den zuvor genannten Platzhalter (auch genannt{' '}
            <em>NativeFunction string</em>) anstelle des function body einsetzen. Anbei eine
            modellhafte Ausgabe:
          </Typography>
          <CodeBox code={functionECMAScriptModel} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Die Parameter können bei der Ausgabe weggelassen werden, wenn es eine{' '}
            <Link href="https://tc39.github.io/ecma262/#sec-well-known-intrinsic-objects">
              sehr bekanntes Object
            </Link>{' '}
            (wie <Code>Array</Code>, <Code>Error</Code>, <Code>isNaN</Code>, etc.) ist:
          </Typography>
          <CodeBox code={functionECMAScriptObjects} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Durch den <Code>constructor</Code> dynamisch generierte Funktionen müssen von den
            Engines nun automatisch generiert werden, wenn die <Code>toString()</Code> Methode auf
            diese angewandt wird.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

FeatureFunctionToString.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureFunctionToString);
