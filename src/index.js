import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </ReduxProvider>
        <ToastContainer />
    </StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
