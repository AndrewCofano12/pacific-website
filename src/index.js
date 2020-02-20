import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var doc = document.getElementById('root')

// function preventHistoryBack (e) {
//     var delta = e.deltaX || e.wheelDeltaX;
  
//     if (! delta) {
//       return;
//     }
  
//     window.WebKitMediaKeyError /*detect safari*/ && (delta *= -1);
  
//     if (((doc.scrollLeft + doc.offsetWidth) === doc.scrollWidth && delta > 0)) {
//       e.preventDefault();
//     }
//   };

//   doc.addEventListener('mousewheel', preventHistoryBack);


ReactDOM.render(<App />, doc);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
