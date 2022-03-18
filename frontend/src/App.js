import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// layout
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

// pages
import Home from './components/pages/Home/index.jsx'
import Destinos from './components/pages/Destinos/index.jsx'
import Promocoes from './components/pages/Promocoes/index.jsx'
import AtendimentoContato from './components/pages/AtendimentoContato/index.jsx'
import Cadastro from './components/pages/Cadastro/index.jsx'

function App() {
return (
    <>
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destinos" element={<Destinos />} />
            <Route path="/Promocoes" element={<Promocoes />} />
            <Route path="/AtendimentoContato" element={<AtendimentoContato />} />
            <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
        <Footer /> 
    </Router>    
    </>
);
}

export default App;