import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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
  paperWarning: {
    backgroundColor: 'rgba(255, 253, 211, .75)',
    color: 'rgb(229, 219, 25)',
  },
});

const flatMapSyntax = `// create new nested Array
const arr = [1, 2, 3, 4];

// call flatMap() "directly" from the array
const newFlatmappedArray1 = arr.flatMap(x => [x, x * 2]);

// call flat() from Prototype
const newFlatmappedArray2 = Array.prototype.flatMap.call(arr, x => [x, x * 2]);`;

const flatMapExamples = `// create new Array
const arr = [1, 2, 3, 4];

// create callback function
const doubleAndTripple = x => [x * 2, x * 3];

console.log(arr.flatMap(doubleAndTripple);
// expected result: [2, 3, 4, 6, 6, 9, 8, 12]`;

const flatMapRecursive = `// create a nested Array
const arr = [1, 2, [3, [4, 5]], 6];

// we want to perform the same operation on the nested arrays items
const recursiveCallback = x =>
  Array.isArray(x)
    ? x.flatMap(recursiveCallback)
    : [x * 2, x * 3];

console.log(arr.flatMap(recursiveCallback));
// expected result: [2, 3, 4, 6, 6, 9, 8, 12, 10, 15, 12, 18]`;

const legacyFlatMap = `// before flatMap() the original array had to be reduce and concatinated
var arr = [1, 2, 3, 4];

arr.reduce((acc, x) => acc.concat([x * 2]), []);
// expected result: [2, 4, 6, 8]`;

const splitStrings = `const arr = ['flatMap() ', '', ' on arrays', 'is cool'];

console.log(arr.map(x => x.split(' ')));
// [['flatMap()', ''], [''], ['', 'on', 'arrays'], ['is', 'cool']]

console.log(arr.flatMap(x => x.split(' ')));
// ['flatMap()', '', '', '', 'on', 'arrays', 'is', 'cool']`;

const FeatureArrayFlatmap = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <Code>Array.prototype.flatMap()</Code> oder <Code>[].flatMap()</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Im Grunde ist <Code>Array.prototype.flatMap()</Code> eine Kombination der bekannten
            Methode <Code>Array.prototype.map()</Code> und der neuen Methode
            <Code>Array.prototype.flat()</Code>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Genau wie <Code>Array.prototype.map()</Code> akzeptiert die neue Methode eine
            <Code>callback</Code> Funktion. Der Rückgabewert ist jedoch ein neues flaches
            <Code>Array</Code>.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>
              Array.prototype.flatMap.call([], <em>callback</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <Code>
              [].flatMap(<em>callback</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Parameter: </strong>
            <Code>callback</Code>
            <Code>
              <em>{'{function => Array}'}</em>
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Return: </strong>
            <Code>Array</Code>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Die neue Prototype-Funktion <Code>flatMap()</Code> kann, wie bei allen
            Protoype-Funktionen, entweder per <Code>call()</Code> vom zugrundeliegenden Protoypen
            selbst oder per Prototype-Chain-Zugriff erfolgen.
          </Typography>
          <CodeBox code={flatMapSyntax} />
          <Typography variant="body1" gutterBottom>
            Kennt man also den Datentypen innerhalb eines Arrays kann man eine sehr einfache
            Bearbeitung mittels der <Code>callback</Code> Funktion erzielen. Es ist in den meisten
            Anwendungsfällen jedoch sinnvoll schon vorher eine eigene Funktion zu definieren, die
            einfach an die Methode übergeben wird.
          </Typography>
          <CodeBox code={flatMapExamples} />
          <blockquote>
            <Typography variant="h6" gutterBottom>
              <span role="img" aria-label="warning-icon">
                ⚠
              </span>
              ️ Bitte beachten:
            </Typography>
            <Divider className={classes.spacer} />
            <Typography variant="body1">
              Es gibt bei <Code>flatMap()</Code> keinen Parameter für die Tiefe der Verschachtelung,
              die reduziert werden soll.
            </Typography>
          </blockquote>
          <Typography variant="body1" gutterBottom>
            Kennt man die Tiefe der Veschachtelung ist dies eine sehr einfache Lösung. Kennt man sie
            jedoch nicht muss man sich mit einer kleinen rekursiven Implementation aushelfen. Da
            diese aber auf dem Prototypen basiert ist auch das eigentlich kein sehr kompliziertes
            Unterfangen.
          </Typography>
          <CodeBox code={flatMapRecursive} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Legacy Ansatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            In einer Zeit vor ECMAScript 2019 war diese Implementierung relativ umständlich und
            wenig leserlich.
          </Typography>
          <CodeBox code={legacyFlatMap} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <Code>Array.prototype.flatMap</Code> im Einsatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Wie aber kann man diese schöne neue Funktion sinnvoll einsetzen? So ist zum Beispiel der
            Rückgabewert von <Code>String.prototype.split()</Code> immer ein Array. Hat man also
            eine Anzahl an Sätzen/Schnippseln, die in einzelne Worte aufgeteilt werden sollen kann
            man diese mithilfe von <Code>flatMap()</Code> sehr einfach normalisieren und bekommt ein
            sauberes und flaches Array mit den einzelnen Wörtern zurück.
          </Typography>
          <CodeBox code={splitStrings} />
        </Grid>
      </Grid>
    </div>
  );
});

FeatureArrayFlatmap.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureArrayFlatmap);
