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
  paperWarning: {
    backgroundColor: 'rgba(255, 253, 211, .75)',
    color: 'rgb(229, 219, 25)',
  },
});

const trimStartSyntax = `// some sample string
const str = '     In accordance to our developer-ancestors ';

// call trimStart() directly from the string
const newStr1 = str.trimStart();

// call trimStart() from Prototype
const newStr2 = String.prototype.trimStart.call(str);`;

const trimEndSyntax = `// some sample string
const str = 'lets just print "Hello World!" here.      ';

// call trimEnd() directly from the string
const newStr1 = str.trimEnd();

// call trimEnd() from Prototype
const newStr2 = String.prototype.trimEnd.call(str);`;

const concatStrings = `// some sample strings
const str1 = '     What does the term ';
const str2 = '        "Hello World!"      ';
const str3 = ' mean to you?      ';

// trim them both on one end
console.log(str1.trimStart() + str2.trim() + str3.trimEnd());
// expected result:
// "What does the term Hello World!" mean to you?"`;

const FeatureStringTrimExtension = withStyles(styles)(props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>String.prototype.trimStart()</Code> oder <Code>"".trimStart()</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            <Code>trimStart()</Code> bietet eine Erweiterung des String-Prototypen um den Beginn
            eines Strings von überflüssigen Leerzeichen zu bereinigen.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>String.prototype.trimStart.call("")</Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <Code>"".trimStart()</Code>
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
            Die neue Prototype-Funktion <Code>trimStart()</Code> kann, wie bei allen
            Protoype-Funktionen, entweder per <Code>call()</Code> vom zugrundeliegenden Protoypen
            selbst oder per Prototype-Chain-Zugriff erfolgen.
          </Typography>
          <CodeBox code={trimStartSyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6">
            <Code>String.prototype.trimEnd()</Code> oder <Code>"".trimEnd()</Code>
          </Typography>
          <div className={classes.spacerDiv} />
          <Typography variant="body1" paragraph>
            <Code>trimEnd()</Code> bietet eine Erweiterung des String-Prototypen um den Beginn eines
            Strings von überflüssigen Leerzeichen zu bereinigen.
          </Typography>
          <Divider className={classes.spacer} />
          <Typography variant="body1" gutterBottom>
            <strong>Syntax: </strong>
            <Code>String.prototype.trimEnd.call("")</Code>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Short Syntax: </strong>
            <Code>"".trimEnd()</Code>
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
            Die neue Prototype-Funktion <Code>trimEnd()</Code> kann, wie bei allen
            Protoype-Funktionen, entweder per <Code>call()</Code> vom zugrundeliegenden Protoypen
            selbst oder per Prototype-Chain-Zugriff erfolgen.
          </Typography>
          <CodeBox code={trimEndSyntax} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            <Code>{'String.prototype.{trimStart() | trimEnd()}'}</Code> im Einsatz
          </Typography>
          <Typography variant="body1" paragraph>
            Der String-Prototyp hatte schon vorher eine Methode (<Code>trim()</Code>) die
            überflüssige Leerzeichen in einem String an beiden Enden bereinigte. Daher scheinen
            diese beiden Erweiterungen eher obsolet, denn hilfreich. Dennoch bieten sie uns als
            Entwickler eine feinere Kontrolle über die Bearbeitung von Strings, die zuweilen recht
            hilfreich sein kann.
          </Typography>
          <CodeBox code={concatStrings} />
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h6" gutterBottom>
            Welche Zeichen gelten als "Whitespace"?
          </Typography>
          <Typography component="div" variant="body1" gutterBottom>
            <Link href="https://tc39.github.io/ecma262/#sec-white-space">
              Whitespace code points
            </Link>
            <ul className="inlineUl">
              <li>{'<TAB> (CHARACTER TABULATION, U+0009)'}</li>
              <li>{'<VT> (LINE TABULATION, U+000B)'}</li>
              <li>{'<FF> (FORM FEED, U+000C)'}</li>
              <li>{'<SP> (SPACE, U+0020)'}</li>
              <li>{'<NBSP> (NO-BREAK SPACE, U+00A0)'}</li>
              <li>
                {
                  '<ZWNBSP> (ZERO WIDTH NO-BREAK SPACE, U+FEFF) Any other Unicode character with the property White_Space in category Space_Separator (Zs)'
                }
              </li>
            </ul>
          </Typography>
          <Typography component="div" variant="body1" gutterBottom>
            <Link href="https://tc39.github.io/ecma262/#sec-line-terminators">
              LineTerminator code points
            </Link>
            <ul className="inlineUl">
              <li>{'<LF> (LINE FEED, U+000A)'}</li>
              <li>{'<CR> (CARRIAGE RETURN, U+000D)'}</li>
              <li>{'<LS> (LINE SEPARATOR, U+2028)'}</li>
              <li>{'<PS> (PARAGRAPH SEPARATOR, U+2029)'}</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

FeatureStringTrimExtension.propTypes = {
  classes: PropTypes.object,
};

export default withRouter(FeatureStringTrimExtension);
