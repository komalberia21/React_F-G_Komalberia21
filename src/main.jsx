import React from 'react'
import ReactDOM from 'react-dom/client'
import FormContextProvider from './context/FormContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormContextProvider>
    <ToastContainer/>
    <App />
    </FormContextProvider>
  </React.StrictMode>,
)
