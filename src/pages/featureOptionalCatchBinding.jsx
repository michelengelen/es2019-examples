import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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

const optionalCatchSyntax = `// catch without bound parameter
try {
  ...
} catch {
  ...
}`;

const optionalCatchOldSyntax = `// catch with bound parameter
try {
  ...
} catch (error) {
  console.warn(error);
}`;

const jsonParseError = `JSON.parse('abc')
SyntaxError: Unexpected token a in JSON at position 0`;

const jsonParseErrorHandling1 = `let jsonData;
try {
  // try to convert the given string to JSON
  jsonData = JSON.parse(str);
} catch {
  // if it fails have a fallback ready to kick in
  jsonData = DEFAULT_DATA;
}`;

const jsonParseErrorHandling2 = `let jsonData;
try {
  // try to convert the given string to JSON
  jsonData = JSON.parse(str);
} catch (err) {
  // if it fails check if it is because of a Syntaxerror 
  if (err instanceof SyntaxError) {
    // handle Syntaxerrors with a fallback
    jsonData = DEFAULT_DATA;
  } else {
    // if it is a different error throw it
    throw err;
  }    
}`;

const propertyChainTryCatch = `function logId(person) {
  // set a default value beforehand
  let id = 'No ID';
  try {
    // try to store the id 
    id = person.data.id;
  } catch {}
  console.log(id);
}`;

const propertyChainExplicit = `function logId(person) {
  // set a default value beforehand
  let id = 'No ID';
  if (person && person.data && person.data.id) {
    id = person.data.id;
  }
  console.log(id);
}`;

const propertyChainExplicitShort = `function logId(person) {
  // set a default value beforehand
  let id = (person && person.data && person.data.id) || 'No ID';
  console.log(id);
}`;

const FeatureOptionalCatchBinding = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            Optionales Parameter-Binding im <Code>catch</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Für die wenigen Fälle in denen keine Parameter in einem <Code>catch</Code> notwendig ist
            stellt diese Neuerung eine Lösung bereit.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="body1" gutterBottom>
            In einigen Anwendungsfällen wird kein Parameter im <Code>catch</Code> benötigt. Bisher
            musste man immer einen Parameter angeben, der meist einfach gelogged wird und ansonsten
            nicht weiter sinnvolle Verwendung findet.
          </Typography>
          <CodeBox code={optionalCatchSyntax} />
          <Typography variant="body1" gutterBottom>
            Die Überlegung war also in diesem Fall: "Wenn man die Variable eh nicht nutzt kann man
            sie auch weglassen". Nutzt man sie nicht werfen die meisten linter zudem Fehler wegen
            ungenutzter Variablen.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Legacy Ansatz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Wie bereits erwähnt musste die Variable bisher immer gesetzt werden und in einigen
            Fällen wird diese einfach in die Konsole gelogged ohne sie weiter zu behandeln.
          </Typography>
          <CodeBox code={optionalCatchOldSyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Empfehlungen für den Einsatz
          </Typography>
          <Typography component="div" variant="body1" gutterBottom>
            Es gibt im allgemeinen zwei grundsätzliche Anwendungsfälle:
            <ul className="inlineUl">
              <li>Man möchte den Fehler komplett ignorieren oder er ist schlicht nicht relevant</li>
              <li>
                Falls es einen Fehler geben sollte ist der bereits bekannt und/oder wird allgemein
                behandelt ohne auf die Variable einzugehen
              </li>
            </ul>
          </Typography>
          <Typography component="div" variant="body1" gutterBottom>
            Ich rate jedoch davon ab die Fehler zu ignorieren, denn ...
            <ul className="inlineUl">
              <li>
                ... auch wenn er nicht beachtet wird sollte man ihn in die Konsole loggen, falls es
                doch einmal zu Problemen kommt
              </li>
              <li>
                ...falls der potentielle Fehler bekannt ist, sollte man besser checken ob nicht ein
                anderer, unerwarteter auftritt, den man dann gesondert behandeln müsste
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Einsatzzweck: <Code>JSON.parse()</Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            In diesem Fall gibt es eine sehr vorhersehbare Fehlerquelle: <Code>SyntaxError</Code>.
          </Typography>
          <CodeBox code={jsonParseError} />
          <Typography variant="body1" gutterBottom>
            Hier macht es definitiv Sinn den Fehler zu ignorieren und stattdessen einen Fallback
            Fall anzuwenden, von dem man sicher weiss, dass er keinen Fehler wirft.
          </Typography>
          <CodeBox code={jsonParseErrorHandling1} />
          <Typography variant="body1" gutterBottom>
            Mit diesem Ansatz gibt es nur ein Problem, denn, obwohl unwahrscheinlich, kann es
            durchaus sein, dass beim parsen kein Syntaxerror das Problem ist sondern etwas anderes
            und unvorhergesehenes. In diesem Fall sollte man mit der alten <Code>try/catch</Code>{' '}
            Syntax arbeiten und den erhaltenen Fehler auf seinen Typ überprüfen (mittels{' '}
            <Code>typeof</Code>) und entsprechend behandeln.
          </Typography>
          <CodeBox code={jsonParseErrorHandling2} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Einsatzzweck: Property chains
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ein etwas ungewöhnlicher Ansatz ist die Prüfung von Property-chains mittels{' '}
            <Code>try/catch</Code>. Man umgeht damit den Fehler{' '}
            <em>Cannot read property 'id' of undefined</em>, den man bei einer einfachen Zuweisung
            erhalten würde.
          </Typography>
          <CodeBox code={propertyChainTryCatch} />
          <Typography variant="body1" gutterBottom>
            Ich bevorzuge jedoch explizite checks.
          </Typography>
          <CodeBox code={propertyChainExplicit} />
          <Typography variant="body1" gutterBottom>
            Dieser Ansatz kann mit dem <Code>&&</Code> Operator sogar noch etwas vereinfacht werden.
            Die Vereinfachung macht den Code aber auch weniger gut lesbar.
          </Typography>
          <CodeBox code={propertyChainExplicitShort} />
        </Grid>
      </Grid>
    </div>
  );
});

FeatureOptionalCatchBinding.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureOptionalCatchBinding);
