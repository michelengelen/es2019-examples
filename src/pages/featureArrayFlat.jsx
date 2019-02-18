import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia as prismStyle } from 'react-syntax-highlighter/dist/styles/prism';

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
});

const CodeBox = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={prismStyle}>
      {code}
    </SyntaxHighlighter>
  );
};

const flatSyntax = `// create new nested Array
const nestedArray = [1, 2, 3, [4, [5, 6], 7, [8, 9]]];

// call flat() "directly" from the array
const newFlatArray1 = nestedArray.flat(2);

// call flat() from Prototype
const newFlatArray2 = Array.prototype.flat.call(nestedArray, 1);`;

const FeatureArrayFlat = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <code>Array.prototype.flat()</code> oder <code>[].flat()</code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Mithilfe dieser neuen prototype-funktion ist es möglich ein in mehrere Ebenen
            verschachteltes <code>Array</code> auf eine Ebene zu reduzieren. Der Rückgabewert ist
            ein neues (flaches) <code>Array</code>.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <code>
              Array.prototype.flat.call([], <em>depth</em>)
            </code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <code>
              [].flat(<em>depth</em>)
            </code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Parameter: </strong>
            <code>depth</code>
            <code>{'{number = 1}'}</code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Return: </strong>
            <code>Array</code>
          </Typography>
          <CodeBox code={flatSyntax} />
          <Typography variant="body1" gutterBottom>
            Die neue Prototype-Funktion <code>flat()</code> kann, wie bei allen Protoype-Funktionen,
            entweder per <code>call()</code> vom Protoypen selbst oder per Prototype-Chain-Zugriff
            erfolgen.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Historie, Gegenwart und Zukunft
          </Typography>
          <Typography variant="body1" gutterBottom>
            Die erste Version von ECMAScript ist im Jahre 1997 entstanden um den Standard für die,
            damals noch neue, Sprache JavaScript zu bilden. Federführend war hier{' '}
            <Link href="https://en.wikipedia.org/wiki/Guy_L._Steele_Jr.">Guy Lewis Stewart</Link>,
            der damit den Grundstein ES1 bildete.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Mittlerweile existiert für die Ausarbeitung der Spezifikationen ein Gremium:{' '}
            <Link href="https://github.com/tc39">Technical Committee 39 [TC39]</Link>. Dieses setzt
            sich aus Entwicklern aus den unterschiedlichsten Bereichen zusammen und entscheidet über
            die Aufnahme neuer Features, Refinements oder Reworks innerhalb der Spezifikationen.
            Jeder der eingereichten Vorschläge, seien es neue Prototyp-Funktionen oder simple
            Umbenennungen, durchläuft in dem Aufnahmeprozess bis zu fünf Stufen.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Die 5 Stufen
          </Typography>
          <Grid container spacing={32} className={classes.stretch}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h5">Stufe 0</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <em>Strawman / Ideas</em>
                </Typography>
                <Divider variant="middle" className={classes.spacer} />
                <Typography variant="body1">
                  Der Beginn einer jeden Spezifikation: Eine grundlegende Idee zur Verbesserung der
                  Sprache ohne genauere Ausarbeitung oder Implementation.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h5">Stufe 1</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <em>Proposals</em>
                </Typography>
                <Divider variant="middle" className={classes.spacer} />
                <Typography variant="body1">
                  In dieser Stufe befinden sich die Vorschläge, die von einem sogenannten "Champion"
                  (Fürsprecher aus dem Gremium) für potenziell förderungswürdig erachtet werden.
                  Eine erste Implementation der Funktionalität wird erwartet ist aber nicht
                  Vorraussetzung. Die Identifikation von möglichen Lösungsansätzen und potenziellen
                  Schwierigkeiten bei der Umsetzung sollte hier geschehen.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h5">Stufe 2</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <em>Drafts</em>
                </Typography>
                <Divider variant="middle" className={classes.spacer} />
                <Typography variant="body1">
                  Proposals, die es bis in diese Stufe geschafft haben werden ab jetzt genauer
                  ausgearbeitet und als erster Vorschlag in der Sprachumgebung eingesetzt. Zudem
                  sollte die genaue Spezifikation des Proposals bereits vorliegen, auch wenn nicht
                  erwartet wird, dass diese vollständig und fehlerfrei ist.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h5">Stufe 3</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <em>Candidates</em>
                </Typography>
                <Divider variant="middle" className={classes.spacer} />
                <Typography variant="body1">
                  Nach der Draft-Phase und der damit verbundenen experimentellen Implementierung
                  erfolgt hier nun ein ausgeweiteter Test unter Ausweitung der Anwendergruppe.
                  Spezifikation, Syntax und Semantik müssen dafür schon in sehr ausgereifter,
                  idealerweise aber in finaler Form vorliegen, denn Anpassungen werden in dieser
                  Stufe nur noch akzeptiert, wenn kritische Indikatoren dies notwendig machen.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography variant="h5">Stufe 4</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <em>Finished / Approved</em>
                </Typography>
                <Divider variant="middle" className={classes.spacer} />
                <Typography variant="body1">
                  Feature-Proposals, die es in diese Stufe geschafft haben werden mit sehr großer
                  Wahrscheinlichkeit in der neuen ECMAScript-Version implementiert.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

FeatureArrayFlat.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureArrayFlat);
