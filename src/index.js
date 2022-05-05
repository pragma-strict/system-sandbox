import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const myReactRootElement = ReactDOM.createRoot(document.getElementById('p5-canvas-container'));
myReactRootElement.render(
  <React.StrictMode>
    <App x="300" y="100"/>
  </React.StrictMode>
);
