import React from 'react';  //{ useState, createContext }
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

// export const TokenContext = createContext(null);

function Router() {

  //const TOKEN = "e6387912d85eb7e80bedecb3e3358f0151f1c6a9";
  // const [token, setToken] = useState('');

  return (
    <React.StrictMode> 
      {/* <TokenContext.Provider value={{token, setToken}}> */}
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Auth/>} />
            <Route exact path="/movies" element={<App/>} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
      {/* </TokenContext.Provider> */}      
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
