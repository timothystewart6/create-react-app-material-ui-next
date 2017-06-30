import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import './index.css';
import AppBar from './AppBar';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
    <AppBar />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
