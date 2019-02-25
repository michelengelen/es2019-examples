import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

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

const EsHistory = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.content} spacing={24}>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 1, 2 & 3</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <em>Die frühen Tage</em>
          </Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography variant="body1">
            ECMAScript 1, die erste Version des JavaScript Sprachstandards, wurde im Juni 1997
            veröffentlicht. Genau ein Jahr später wurde ein kleineres inkrementelles Update
            herausgebracht: ECMAScript 2. Diese Anpassungen waren notwendig um den ISO Standard, der
            damals für JavaScript erstellt wurde eingehalten werden konnte. Nur eineinhalb Jahre
            später, nämlich im Dezember 1999, wurde schließlich ECMAScript 3 veröffentlicht. Mit
            dieser Version wurden viele der heute für selbstverständlich angesehenen Features
            hinzugefügt, wie <Code>regular expressions</Code>,
            <Code>try/catch</Code> exception handling, und Formatierungen für numerische
            Ausgaben.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 4</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <em>Der Fehlschlag</em>
          </Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography paragraph variant="body1">
            Anfang 2000 begann die Arbeit an einem neuerlichen Upgrade: ECMAScript 4 (Codename
            JavaScript 2). Schließlich wurde im Jahr 2003 ein interner Report veröffentlicht, der
            einige der neuen Features für ES4 beschrieb. Über diese gab es unter den im Gremium
            vertretenen Kollaboratoren schwere und langwierige Meinungsverschiedenheiten (Adobe,
            Mozilla, Opera & Google wollte die Arbeit an dem massiven Upgrade ES4 weiterführen -
            Microsoft & Yahoo jedoch stimmten dafür ein inkrementelles Update ES3.1 vorzuschieben
            und ein größeres Update mit den in ES4 angestrebten Änderungen im Nachgang zu beginnen),
            welche schlussendlich dazu führten, dass die Arbeit an dieser Version abgbrochen wurde.
          </Typography>
          <Typography paragraph variant="body1">
            Auf einer Konferenz im Jahre 2008 in Oslo wurde schließlich ein Kompromiss geschlossen:
            Das inkrementelle Update ES3.1 wird unter dem Namen ES5 veröffentlicht werden und die
            Version ES6 (Codename Harmony) sollte die ambitionierten Vorschläge von ES4 aufgreifen.
            Damit war das Ende von ES4 offiziell besiegelt.
          </Typography>
          <Typography variant="body1">
            Ein weitere Konsenz aus der Konferenz, nämlich darüber, dass alle zukünftigen Ideen mit
            dem heute vorliegenden Stufen-Schema entwickelt werden, soll ein solches Dilemma wie das
            um ES4 verhindern.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 5</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <em>Der kompromiss</em>
          </Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography paragraph variant="body1">
            Das inkrementelle Update zu ES3 wurde im Jahr 2009 veröffentlicht, mehr als ein
            Jahrzehnt nach ES3. Aktuell unterstützen alle Browser diesen Standard zu 100% (bis auf
            den Internet Explorer v8 ... natürlich)
          </Typography>
          <Typography component="div" variant="body1">
            ES5 führte einige neue Features ein, wie:
            <ul>
              <li>
                <Code>JSON</Code> parsing/serialization
              </li>
              <li>
                <Code>Array.prototype methods</Code> (wie <Code>map</Code>
                und <Code>forEach</Code>)
              </li>
              <li>
                <Code>Object.prototype methods</Code> (wie{' '}
                <Code>Object.keys()</Code>)
              </li>
              <li>
                <Code>use strict;</Code>
              </li>
              <li>
                syntaktische Verbesserungen (zum Beispiel hängende Kommata und reservierte Wörter
                wie <Code>for</Code> und <Code>new</Code>)
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 6</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <em>Der heisse Scheiss</em>
          </Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography paragraph variant="body1">
            Diese Version des ECMAScript Standards führte einige der bis heute beliebtesten
            Funktionen ein. Gleichzeitig entschied TC39 zu einer jahresgebundenen Versionierung zu
            wechseln. Somit ist ES6 eigentlich die falsche Bezeichnung (man sieht es dennoch relativ
            häufig online), sondern sollte ECMAScript2015 genannt werden. Da Browser diesen Standard
            nicht nativ unterstützen wird ein Transpiler benötigt, der aus dem ES2015 Code ES5 code
            generiert, den ein Browser in jedem Fall (ausser Internet Explorer 8) zu 100% nativ
            unterstützt. Dies gilt für alle kommenden Versionen.
          </Typography>
          <Typography component="div" variant="body1">
            Ein Auszug aus den neuen Features in ES2015:
            <ul>
              <li>
                <Code>arrow functions</Code>
              </li>
              <li>Klassen</li>
              <li>verbesserte Objekt-Literale</li>
              <li>Template Strings</li>
              <li>
                <Code>let</Code> und <Code>const</Code>
              </li>
              <li>Promises</li>
              <li>und vieles mehr</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 2016</Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography paragraph variant="body1">
            Aufgrund des nun jährlich angesetzten Release-Zyklus sind auch die Anpassungen und neuen
            Features eher klein/weniger.
          </Typography>
          <Typography component="div" variant="body1">
            Im Falle von ES2016 sind es sogar nur 2 Features:
            <ul>
              <li>
                <Code>Array.prototype.includes()</Code>
              </li>
              <li>
                <Code>**</Code> (Exponenten Operator)
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 2017</Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography paragraph variant="body1">
            Veröffentlichung im Januar 2017. Das Kernfeature ist <em>Shared memory and atomics</em>.
          </Typography>
          <Typography component="div" variant="body1">
            Major Features:
            <ul>
              <li>
                <Code>async/await</Code> (asynchrone Funktionen)
              </li>
              <li>
                <Link href="http://2ality.com/2017/01/shared-array-buffer.html">
                  Shared memory and atomics
                </Link>
              </li>
            </ul>
            Minor Features:
            <ul>
              <li>
                <Code>Object.values</Code> und <Code>Object.entries</Code>
              </li>
              <li>
                <Code>Object.getOwnPropertyDescriptors</Code>
              </li>
              <li>String padding</li>
              <li>hängende Kommata in Funktionsparametern</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography variant="h5">ECMAScript 2018</Typography>
          <Divider variant="middle" className={classes.spacer} />
          <Typography component="div" variant="body1">
            Major Features:
            <ul>
              <li>Asynchrone Iteration</li>
              <li>Rest/Spread Operatoren</li>
              <li>diverse RegExp Anpassungen</li>
            </ul>
            Minor Features:
            <ul>
              <li>
                <Code>Promise.prototype.finally()</Code>
              </li>
              <li>eine Revision des Template-Literals</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

EsHistory.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(withRouter(EsHistory));
