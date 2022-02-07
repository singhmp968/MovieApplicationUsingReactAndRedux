import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './componenets/App';
// import movies from './reducers';
import rootReducer from './reducers';

 // we are creating this middleware to console.log the action type 
// we are amking this function as curried functions of function logger(obj,next,action)
/*const logger = function({dispatch,getState}){
  // obj will contain 2 argument 1.dispatct and 2.action as property an dredux will automatically pass this 2 argumenrs in the logger function
  return function(next){
    return function(action){
      console.log('ACTION.TYPE=',action.type);
      next(action); // need to passs action to our ***dispatch*** function
    // and here will call dispatch 
    }
  }
}
*/
//2nd way modified the above  logger funcction
const logger=({dispatch,getState})=>(next)=>(action)=>{
    // console.log('ACTION.TYPE=',action.type);
    // need to finx as now we are fetiing function also it will be undefined 
    if(typeof action!=='function'){
    console.log('ACTION.TYPE=',action.type);
    }
    next(action); // need to passs action to our ***dispatch*** function
// and here will call dispatch 
}
// creating thunk middlewware here
/*const thunk = ({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action==='function'){
    action(dispatch);
    return
  }
  next(action)
}
*/

// creatig the store
// const store=createStore(movies); // this expect and argument i.e reducer
//TODO:need to ask
const store=createStore(rootReducer,applyMiddleware(logger,thunk)); // this expect and argument i.e rootReducer
console.log('Store is',store)
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


// // VVI concept using in the above to modify in the logger function
// var f=()=>()=>{return 1};
// f()()