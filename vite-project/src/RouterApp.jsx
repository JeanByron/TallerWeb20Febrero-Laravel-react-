import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Formulario from './Formulario.jsx'
import Tabla from './Tabla.jsx'
import React from "react";

export default function RouterApp(){
    return (
        <Router>
            <div className="container mt-4">
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/table">Tabla</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Formulario/>}/>
                    <Route path="/table" element={<Tabla/>}/>
                </Routes>
            </div>
        </Router>
    )
}