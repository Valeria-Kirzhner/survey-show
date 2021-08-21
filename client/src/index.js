import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App'; 

const store = createStore(()=> [] , {}, applyMiddleware()); // the 1 argument is all the reducers, the 2 argument is the starting/initial state of the app - this more for server side rendering which is not in my case,  

ReactDOM.render(
< Provider store={store}> < App /> </Provider>,
document.querySelector('#root')); // ReactDom render the root component that handle all the components. The '#root' you can found in public/index.html