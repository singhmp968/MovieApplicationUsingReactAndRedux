import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './componenets/App';
import movies from './reducers';
// creatig the store
const store=createStore(movies); // this expect and argument i.e reducer
console.log('Store',store)
// console.log('BEFORE Store STATE',store.getState())
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// }); // thi will take object as an argument
// console.log('AFTER Store STATE',store.getState())
{/* <App store={store} /> passing store in the app */}
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

