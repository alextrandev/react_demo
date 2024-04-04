import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './task1/App.jsx'
import App2 from './task2/App.jsx'
import App3 from './task3/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1 />
    <App2 />
    <App3 />
  </React.StrictMode>,
)
