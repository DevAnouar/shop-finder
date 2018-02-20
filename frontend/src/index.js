import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
