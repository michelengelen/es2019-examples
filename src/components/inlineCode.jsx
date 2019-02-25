import React from 'react';

const style = {
  backgroundColor: 'rgba(0,0,0,.05)',
  padding: '3px 4px',
  margin: '0 2px',
  borderRadius: 4,
  color: 'rgba(0,0,0,.75)',
};

const InlineCode = ({ children }) => (
  <code style={style}>{children}</code>
);

export default InlineCode;
