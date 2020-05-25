import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import "semantic-ui-css/semantic.min.css";

import configureStore from './app/store/configureStore';

const store = configureStore();

// reference to root element
const rootEl = document.getElementById('root')

// create reusable render metheod
let render = () => {
  // Dynamically import main App component, and rneder it
  const App = require('./app/layout/App').default

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootEl
    );
}

if(module.hot) {
  // Support hot reloading of components.
  // Whenever the App component file or one of its dependencies
  // is changed, re-import the updated component and re-render it
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
  
}

render();
