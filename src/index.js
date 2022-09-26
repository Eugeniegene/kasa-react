import React from 'react'
import {createRoot} from "react-dom/client"
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Homepage from "./pages/Homepage/Homepage" 
import About from "./pages/About/About" 

const rootElement = document.getElementById('root')
  if (rootElement != null){
    const root = createRoot(rootElement)
  root.render(//will render each component that will build the page as itself
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />}/>
      </Routes>
    </BrowserRouter>
  )
}
reportWebVitals()
