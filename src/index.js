import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'router/router';
import * as serviceWorker from './serviceWorker';

// import css files
import 'assets/styles/main.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
