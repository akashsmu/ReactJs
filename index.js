import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {Samples} from './Sample.js';
//import {MyApp} from './Sample.js';
import Todo from './Todo.js'
import './style.css'
import FormsEx from './MyApp'
import Appss from './FormContainer'
import 'bootstrap/dist/css/bootstrap.css'
import FinalCounter from './FinalCounter'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

// ReactDOM.render(element,
//   document.getElementById('root')
// );



  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
