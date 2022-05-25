import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import * as serviceWorkerRegistration from './test/workerRegistration';
// import reportWebVitals from './test/reportWebVitals';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode></React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
