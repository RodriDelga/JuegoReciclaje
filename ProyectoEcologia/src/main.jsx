import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
/**
 * Este es el main, el cual va a mandar todos los
 * archivos al index.html con la función que esta
 * aquí abajo
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Esto verifica que este todo bien en tus scripts mientras la app este en versión de desarrollo */}
    <App />
  </React.StrictMode>,
)
