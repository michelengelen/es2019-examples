import React from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight as prismStyle } from 'react-syntax-highlighter/dist/styles/hljs';

const preStyle = {
  backgroundColor: 'rgba(0,0,0,.05)',
  padding: 20,
  borderRadius: 5,
};

const CodeBox = ({ classes, code }) => (
  <SyntaxHighlighter language="javascript" style={prismStyle} customStyle={preStyle}>
    {code}
  </SyntaxHighlighter>
);

CodeBox.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBox;
