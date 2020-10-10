import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Indecision />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
