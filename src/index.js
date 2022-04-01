import * as ReactDOMClient from 'react-dom/client';
import React from 'react';


import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App/>);