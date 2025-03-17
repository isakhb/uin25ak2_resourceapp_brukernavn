import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Gjemmer standard-styling, slik at min css/styling kommer fram. Samme i main.jsx.
//import './App.css' (Fjerner React sin start-css/styling)

//Importerer style-filen
import "./styles/style.css"
import "./assets/ressurser.js"

//Importerer komponenten Layout
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    </Layout>
  )
}

export default App
