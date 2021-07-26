import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./asincronismo/asincronismo.css"
//import App from './App';
//import { WebFlixApp } from './webflix/WebFlixApp';
//import { CounterApp } from './counterapp/CounterApp';
import Asincronismo from './asincronismo/Asincronismo';


//import App from './App';

// JSX
//const title=<h1>Hola React!</h1>;

// No JSX
//const titulo = React.createElement('h1',{},'Hola React sin JSX');
//const parrafo = React.createElement('p',{},'Ideai compadre');

//que, donde

/*ReactDOM.render(
  //aqui va la const o la funcion
  <App name='Palito Giroud' age={34} />,
  document.getElementById('root')
);

ReactDOM.render(
  <WebFlixApp />,
  document.getElementById('root')
);

ReactDOM.render(
  <CounterApp valor={0}/>
,document.getElementById('root')
);
*/

ReactDOM.render(
  <Asincronismo />,
  document.getElementById('root')
);