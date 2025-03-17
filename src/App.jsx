import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Gjemmer standard-styling, slik at min css/styling kommer fram. Samme i main.jsx.
//import './App.css' (Fjerner React sin start-css/styling)

//Importerer style-filen
import "./styles/style.css"
import resources from "./assets/ressurser.js"

// Debugging
console.log("Loaded Resources:", resources)


//Importerer komponenten Layout
import Layout from './components/Layout'

//Navn på knappene
const categories = ["HTML", "CSS", "JavaScript", "React", "Headless-CMS"]

function App() {
  const [selectedCategory, setSelectedCategory] = useState("HTML")

  // Debugging
  console.log("Valgt kategori:", selectedCategory)

  return (
    <Layout setSelectedCategory={setSelectedCategory} categories={categories}
    selectedCategory={selectedCategory} resources={resources}/>
  )
}

export default App
