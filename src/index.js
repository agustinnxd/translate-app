import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranslationProvider } from 'react-google-multi-lang';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TranslationProvider apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY} defaultLanguage="en">
    <App />
  </TranslationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

