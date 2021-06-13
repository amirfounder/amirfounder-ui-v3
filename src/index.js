import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { StandupTrackerProvider } from './context/StandupTrackerContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StandupTrackerProvider>
        <App />
      </StandupTrackerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
