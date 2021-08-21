import 'materialize-css/dist/css/materialize.min.css'; 
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App'; 
import reducers from './reducers';

const store = createStore( reducers , {}, applyMiddleware()); // the 1 argument is all the reducers, the 2 argument is the starting/initial state of the app - this more for server side rendering which is not in my case,  

ReactDOM.render(// ReactDom render the root component that handle all the components. The '#root' you can find in public/index.html

< Provider store={store}> < App /> </Provider>,// the Provider is a react component that news how to read changes from our redux store. Any gets some new states produced inside of it, The provider will inform all of its children components.

document.querySelector('#root')
); 