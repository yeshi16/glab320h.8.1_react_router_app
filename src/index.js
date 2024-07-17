import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
 
);


