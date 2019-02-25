import React from 'react';
import Code from 'components/code';

export const routeConfigs = {
  esIntroduction: {
    path: '/',
    name: 'Einleitung',
  },
  esHistory: {
    path: '/history',
    name: 'ESCMAScript Historie',
  },
  es2019Features: {
    name: 'ECMAScript 2019',
  },
  es2019Features_overview: {
    path: '/es2019',
    name: 'ES2019 Features',
  },
  es2019Features_arrayFlat: {
    path: '/es2019/array-flat',
    name: 'Array.prototype.flat()',
    primary: <Code>Array.prototype.flat</Code>,
    secondary: 'Champions: Michael Ficarra, Brian Terlson, Mathias Bynens',
    type: 0,
  },
  es2019Features_arrayFlatmap: {
    path: '/es2019/array-flatmap',
    name: 'Array.prototype.flatmap()',
    primary: <Code>Array.prototype.flatMap</Code>,
    secondary: 'Champion: Darien Maillet Valentine',
    type: 0,
  },
  es2019Features_stringTrimExtension: {
    path: '/es2019/string-trim',
    name: 'String.prototype.{trimStart() | trimEnd()}',
    primary: <Code>{'String.prototype.{trimStart() | trimEnd()}'}</Code>,
    secondary: 'Champion: Sebastian Markbåge',
    type: 1,
  },
  es2019Features_symbolDescription: {
    path: '/es2019/symbol-description',
    name: 'Symbol description',
    primary: <Code>Symbol.prototype.description</Code>,
    secondary: 'Champion: Michael Ficarra',
    type: 1,
  },
  es2019Features_optionalCatch: {
    path: '/es2019/optional-catch',
    name: 'Optionales catch binding',
    primary: 'Optionales catch binding',
    secondary: 'Champion: Michael Ficarra',
    type: 1,
  },
  es2019Features_arraySortStability: {
    path: '/es2019/array-sort-stability',
    name: 'Array.sort() stability',
    primary: (
      <span>
        <Code>Array.prototype.sort</Code> Stabilitäts-Verbesserungen
      </span>
    ),
    secondary: 'Champion: Mathias Bynens',
    type: 1,
  },
  es2019Features_jsonStringify: {
    path: '/es2019/json-stringify',
    name: 'JSON stringify Kompatibilität',
    primary: (
      <span>
        <Code>JSON-stringify</Code> Kompatibilität
      </span>
    ),
    secondary: 'Champion: Richard Gibson',
    type: 2,
  },
  es2019Features_jsonSuperset: {
    path: '/es2019/json-superset',
    name: 'JSON superset',
    primary: 'JSON superset',
    secondary: 'Champion: Richard Gibson',
    type: 2,
  },
  es2019Features_functionToString: {
    path: '/es2019/function-to-string',
    name: 'function.prototype.toString Revision',
    primary: (
      <span>
        <Code>Function.prototype.toString</Code> Revision
      </span>
    ),
    secondary: 'Champion: Michael Ficarra',
    type: 2,
  },
};

export const routeSubHeader = [
  'Grundlegende Änderungen/Features',
  'Normale Änderungen/Features',
  'interne Anpassungen',
];
