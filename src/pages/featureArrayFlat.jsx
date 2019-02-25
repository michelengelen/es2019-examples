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
});

const flatSyntax = `// create new nested Array
const nestedArray = [1, 2, 3, [4, [5, 6, [7, 8], 9]]];

// call flat() "directly" from the array
const newFlatArray1 = nestedArray.flat(2);

// call flat() from Prototype
const newFlatArray2 = Array.prototype.flat.call(nestedArray, 1);`;

const flatInfinitySyntax = `// create new nested Array
const nestedArray = [1, 2, 3, [4, [5, 6, [7, 8], 9]]];

console.log(nestedArray.flat(2));
// expected result: [1, 2, 3, 4, 5, 6, [7, 8], 9]

console.log(nestedArray.flat(Infinity));
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]`;

const legacyFlatten = `// to enable deep level flatten use recursion with reduce and concat
var arr1 = [1, 2, 3, [4, 5, 6, 7, [8, 9]]];

function flattenArray(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val)
    ? acc.concat(flattenArray(val))
    : acc.concat(val), []);
}

console.log(flattenArray(arr1));
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]`;

const insertConditionally = `// sample condition
const condition = true;

// array to be conditionally extended
const arr = ['b'];

console.log(Arrayprototype.flat.call([
  (condition ? ['a'] : []),
  arr,
], Infinity));
// expected result: ['a', 'b']`;

const flattenPromises = `// asynchronous function to download files from an array of urls
async function downloadFiles(urls) {
  const downloadAttempts = await Promises.all(
    urls.map(url => downloadFile(url))
  );

  return downloadAttempts.flat(Infinity);
}

// asynchronous function to download one file
async function downloadFile(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return [text];
  } catch {
    return [];
  }
}`;

const FeatureArrayFlat = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <Code>Array.prototype.flat()</Code> oder <Code>[].flat()</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" gutterBottom>
            Mithilfe dieser neuen prototype-funktion ist es möglich ein in mehrere Ebenen
            verschachteltes <Code>Array</Code> auf eine Ebene zu reduzieren. Der
            Rückgabewert ist ein neues (flaches) <Code>Array</Code>.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>
              Array.prototype.flat.call([], <em>depth</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <Code>
              [].flat(<em>depth</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Parameter: </strong>
            <Code>depth</Code>
            <Code>
              <em>{'{number = 1}'}</em>
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Return: </strong>
            <Code>Array</Code>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Die neue Prototype-Funktion <Code>flat()</Code> kann, wie bei allen
            Protoype-Funktionen, entweder per <Code>call()</Code> vom Protoypen selbst
            oder per Prototype-Chain-Zugriff erfolgen.
          </Typography>
          <CodeBox code={flatSyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Der Parameter <Code>depth</Code> gibt um wieviele Dimensionen das Array
            reduziert werden soll - immer ausgehend von der niedrigsten Dimension. Wählt man zum
            Beispiel <Code>Infinity</Code> bekommt man immer ein eindimensionales Array
            zurück.
          </Typography>
          <CodeBox code={flatInfinitySyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Legacy Ansatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Wollte man diesen Effekt ohne die neue Prototpe-Funktion erzielen musste man relativ
            umständlich unter Zuhilfenahme von <Code>Array.prototype.reduce</Code> und
            <Code>Array.prototype.concat</Code> eine rekursive Funktion einsetzen.
          </Typography>
          <CodeBox code={legacyFlatten} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <Code>Array.prototype.flat</Code> im Einsatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Als einfacher Einstzzweck wäre zum Beispiel das konditionelle Hinzufügen eines Eintrags
            in ein Array anzuführen.
          </Typography>
          <CodeBox code={insertConditionally} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Etwas komplizierter wird es, wenn man die <Code>return</Code> Werte von{' '}
            <Code>Promise.all()</Code> behandeln muss. Hier hilft die neue Funktion
            enorm den Code viel lesbarer zu machen.
          </Typography>
          <CodeBox code={flattenPromises} />
        </Grid>
      </Grid>
    </div>
  );
});

FeatureArrayFlat.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureArrayFlat);
