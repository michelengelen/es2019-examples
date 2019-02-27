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

const symbolDescriptionSyntax = `// provide a description to the symbol 
const sym = Symbol('A new Symbol');

// get the description directly from the Symbol
const description = sym.description;

console.log(description);
// expected result: 'A new Symbol'

console.log(description === sym['description']);
// expected result: true`;

const legacySymbolDescription = `// provide a description to the symbol 
const sym = Symbol('Another new Symbol');

// before you could only stringify the symbol
const symbolString = String(sym);

console.log(symbolString);
// expected result: 'Symbol(Another new Symbol)'

// and to get only the description
console.log(String(sym).split('(')[1].split(')')[0]);
// expected result: 'Another new Symbol'`;

const FeatureSymbolDescription = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>Symbol.prototype.description</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Mithilfe dieser Prototype-Property kann man nun direkt auf die Beschreibung des Symbols
            zugreifen ohne umständlich die Beschreibung aus dem Symbol-String zu extrahieren.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>Symbol('Test').description</Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Parameter: </strong>keine
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Return: </strong>
            <Code>String</Code>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Da diese Neuerung keine Funktion, sondern ein simples Property ist es möglich diese mit
            einem einfachen{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors">
              Computed Member Access Operator
            </Link>{' '}
            in <em>Dot notation</em> (<Code>.</Code>) oder <em>Bracket notation</em> (
            <Code>['property_name']</Code>) auszulesen.
          </Typography>
          <CodeBox code={symbolDescriptionSyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Legacy Ansatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bisher musste man sehr umständlich die Beschreibung eines Symbols aus dem String des
            Symbols mit mehreren <Code>split()</Code> calls extrahieren.
          </Typography>
          <CodeBox code={legacySymbolDescription} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            Wer bisher noch nicht weiss wofür <Code>Symbol()</Code> genutzt werden kann und welche
            Vorteile sich daraus ergeben, dem empfehle ich diesen weiterführenden Link in dem sehr
            anschaulich und ausführlich auf das Thema <em>Symbols und Metaprogramming</em>{' '}
            eingegangen wird.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link href="https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/">
              Metaprogramming in es6 symbols
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

FeatureSymbolDescription.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureSymbolDescription);
