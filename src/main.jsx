import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Gjemmer standard-styling, slik at min css/styling kommer fram. Samme i app.jsx
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
