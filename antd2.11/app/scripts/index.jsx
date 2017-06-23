import 'matchmedia-polyfill';
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import RouterComponent from './containers/router';
import './global.less';


const App = () => (
  <RouterComponent />
);

let rootDom = window.document.querySelector('#react_root');
if (!rootDom) {
  rootDom = window.document.createElement('div');
  rootDom.id = 'react_root';
  const body = window.document.getElementsByTagName('body')[0];
  const scripts = body.getElementsByTagName('script')[0];
  if (scripts) {
    body.insertBefore(rootDom, scripts);
  } else {
    body.appendChild(rootDom);
  }
}

ReactDOM.render(<App />, rootDom);
