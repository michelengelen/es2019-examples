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

const arraySortExmaple = `const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();
console.log(months);
// expected result: ["Dec", "Feb", "Jan", "March"]

const arr1 = [1, 30, 4, 21, 100000];

arr1.sort();
console.log(arr1);
// expected result: [1, 100000, 21, 30, 4]

// to sort it by the numerical values of each entry provide a compareFunction

// for numerical values it is pretty simple
const compareFunction = (a, b) => a - b;

const arr2 = [7, 2, 5, 3, 8, 1];

arr2.sort(compareFunction);
console.log(arr2);
// expected result: [1, 2, 3, 5, 7, 8]
`;

const FeatureArraySortStability = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>Array.prototype.sort</Code> Stabilität
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            Diese Anpassung an der Spezifikation führt kein neues Feature ein, sondern ändert nur
            die Requirements an einer bereits bestehenden, denn in der Vergangenheit hat sich
            gezeigt, dass <Code>Array.prototype.sort</Code> von den Browser-Engines unterschiedlich
            implementiert wurde. Und das leider nicht immer in einer stabilen Form. Besonders bei
            Arrays mit einer Länge über 512 Einträgen haben einige Engines eine andere
            Sortiermethode angewandt, die in einigen Fällen zu Fehlern führte.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>
              Array.prototype.flatMap.sort(<em>[compareFunction]</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <Code>
              [].sort(<em>[compareFunction]</em>)
            </Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Parameter: </strong>
            <Code>compareFunction</Code> (optional)
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
            Wenn keine <Code>compareFunction</Code> übergeben wird werden die values nach deren{' '}
            <em>Unicode code point values</em> sortiert. Anbei eine exemplarische Implementation:
          </Typography>
          <CodeBox code={arraySortExmaple} />
        </Grid>
      </Grid>
    </div>
  );
});

FeatureArraySortStability.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureArraySortStability);
