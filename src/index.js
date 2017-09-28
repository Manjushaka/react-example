import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Calculator from './boiling';
import Calculator2 from './boiling2';

const RootApp = Calculator2;

ReactDOM.render(<RootApp />, document.getElementById('root'));
registerServiceWorker();
