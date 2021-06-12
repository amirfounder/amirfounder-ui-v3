import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrumStandupTrackerProvider } from './context/ScrumStandupTrackerContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrumStandupTrackerProvider>
        <App />
      </ScrumStandupTrackerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
