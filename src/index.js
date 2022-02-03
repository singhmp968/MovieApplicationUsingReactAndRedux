import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './componenets/App';
import movies from './reducers';
const store=createStore(movies); // this expect and argument i.e reducer
console.log('Store',store)
console.log('Store',store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

