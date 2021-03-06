// import React, { createContext } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
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
// creating reactContext to pass the store from index.js to other componeent
// export const StoreContext = createContext();
// console.log('StoreContext',StoreContext);

// we can also create and wrpa it into class
//TODO:NEED TA HELP

// class Provider extends React.Component{
//   render(){
//     const {store} =this.props;
//     console.log('dasdasdas',this.props)
//     return (
//     <StoreContext.Provider value={store}>
//       {/* this will acctually is refering to what ever we are passing in between the <Provider store={store}> so for now its <App /> , it can be <h1> or anyy componenet */}
//       {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
//}

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }


// console.log('BEFORE Store STATE',store.getState())
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// }); // thi will take object as an argument
// console.log('AFTER Store STATE',store.getState())
{/* <App store={store} /> passing store in the app */}

/*TODO: There is some issue need to check clearly!!!!!!
// creating connect function and we will be exporting it
//const connectedAppComponenet = connect(callback)(App)
export function connect(callback){ // herewe will be getting the callback value
  return function(Component) {// this will pass componenet like App,Navbar
    // this will return new componenet i.e connectedAppComponenet
    return class ConnectedComponenet extends React.Component{
      // this will render the passing component like App or NAvbar
      constructor(props){
        super(props);
        // here we are calling this to prevent memory leakage
        this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate());
      }
      componentDidMount() {
        this.unsubscribe();
      }
      
      render(){
        const store = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state); // this will return key value pair
        return <Component   {...dataToBePassedAsProps} dispatch= {store.dispatch}/> // {...dataToBePassedAsProps} will do some this like movies = {movies}
          }
      }
    class ConnectedComponenetWrapper extends React.Component{
      render() {
        return (
        <StoreContext.Consumer>
          {(store) => {<ConnectedComponenet  store= {store}/>}}
        </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponenetWrapper;

  };
}
*/
/*
// const connectedComponent = connect(callback)(App);
export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { store } = this.props;
        const state = store.getState();
        const dataToBeSentAsProps = callback(state);

        return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
      }
    }

    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => {
              return <ConnectedComponent store={store} />;
            }}
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  };
}
*/



// 2nd way using class componenet
ReactDOM.render(
  <React.StrictMode>
  {/* here we are wrpping our app componenet to storeXontext so that we can  the store object or the object that we wish to pass will be available to all app as well as it child components and we can use it by using consumer and we can use it at any level like 10 11 level*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//fist way
// ReactDOM.render(
//   <React.StrictMode>
// <StoreContext.Provider value={store}>
//   {/* here we are wrpping our app componenet to storeXontext so that we can  the store object or the object that we wish to pass will be available to all app as well as it child components and we can use it by using consumer and we can use it at any level like 10 11 level*/}
//     <App store={store} />
// </StoreContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // VVI concept using in the above to modify in the logger function
// var f=()=>()=>{return 1};
// f()()