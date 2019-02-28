import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Code from 'components/code';

const styles = theme => ({
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
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

const getStepContent = step => {
  switch (step) {
    case 0:
      return 'Der Beginn einer jeden Spezifikation: Eine grundlegende Idee zur Verbesserung der Sprache ohne genauere Ausarbeitung oder Implementation.';
    case 1:
      return 'In dieser Stufe befinden sich die Vorschläge, die von einem sogenannten "Champion" (Fürsprecher aus dem Gremium) für potenziell förderungswürdig erachtet werden. Eine erste Implementation der Funktionalität wird erwartet ist aber nicht Vorraussetzung. Die Identifikation von möglichen Lösungsansätzen und potenziellen Schwierigkeiten bei der Umsetzung sollte hier geschehen.';
    case 2:
      return 'Proposals, die es bis in diese Stufe geschafft haben werden ab jetzt genauer ausgearbeitet und als erster Vorschlag in der Sprachumgebung eingesetzt. Zudem sollte die genaue Spezifikation des Proposals bereits vorliegen, auch wenn nicht erwartet wird, dass diese vollständig und fehlerfrei ist.';
    case 3:
      return 'Nach der Draft-Phase und der damit verbundenen experimentellen Implementierung erfolgt hier nun ein ausgeweiteter Test unter Ausweitung der Anwendergruppe. Spezifikation, Syntax und Semantik müssen dafür schon in sehr ausgereifter, idealerweise aber in finaler Form vorliegen, denn Anpassungen werden in dieser Stufe nur noch akzeptiert, wenn kritische Indikatoren dies notwendig machen.';
    case 4:
      return 'Feature-Proposals, die es in diese Stufe geschafft haben werden mit sehr großer Wahrscheinlichkeit in der neuen ECMAScript-Version implementiert.';
    default:
      return 'Unknown step';
  }
};

class EsIntroduction extends PureComponent {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = ['Strawman / Ideas', 'Proposals', 'Drafts', 'Candidates', 'Finished / Approved'];

    return (
      <div className={classes.root}>
        <Grid container className={classes.content} spacing={24}>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h6" gutterBottom>
              What the heck is ECMAScript?
            </Typography>
            <Typography paragraph variant="subtitle2">
              Woher kommen all diese coolen neuen Prototyp-Funktionen? Wer oder was definiert
              JavaScript? Und was genau ist eigentlich dieses <Code>ECMAScript</Code>?
            </Typography>
            <Typography variant="body1">
              Vielen von uns ist bekannt, dass <Code>ECMAScript</Code> der
              Sprachstandard ist auf dem Javascript basiert. Dieser ist keinesfalls in Stein
              gemeißelt, sondern unterliegt einem steten Wandel. Wie genau dieser Wandel vonstatten
              geht und wer eigentlich die Entscheidungen trifft welche Features implementiert werden
              möchte ich hier einmal kurz anreissen.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Wie alles begann
            </Typography>
            <Typography paragraph variant="body1">
              Die erste Version von ECMAScript ist im Jahre 1997 entstanden um den Standard für die,
              damals noch neue, Sprache JavaScript zu bilden. Federführend war hier{' '}
              <Link href="https://en.wikipedia.org/wiki/Guy_L._Steele_Jr.">Guy Lewis Stewart</Link>,
              der damit den Grundstein ES1 bildete.
            </Typography>
            <Typography variant="body1">
              Mittlerweile existiert für die Ausarbeitung der Spezifikationen ein Gremium:{' '}
              <Link href="https://github.com/tc39">Technical Committee 39 [TC39]</Link>. Dieses
              setzt sich aus Entwicklern aus den unterschiedlichsten Bereichen zusammen und
              entscheidet über die Aufnahme neuer Features, Refinements oder Reworks innerhalb der
              Spezifikationen. Jeder der eingereichten Vorschläge, seien es neue Prototyp-Funktionen
              oder simple Umbenennungen, durchläuft in dem Aufnahmeprozess bis zu fünf Stufen.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Die 5 Stufen
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step}>
                  <StepLabel>{`Stufe ${index} - ${step}`}</StepLabel>
                  <StepContent>
                    <Typography variant="body1">{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={
                            activeStep !== steps.length - 1 ? this.handleNext : this.handleReset
                          }
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? '... und von vorn' : 'Nächste Stufe'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EsIntroduction.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(withRouter(EsIntroduction));
