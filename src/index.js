import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from './App';

import './styles/normalize.min.css';
import './styles/animations.css';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById( 'root' )
);

