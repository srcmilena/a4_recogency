import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
    return (
        
        <header>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom box-shadow mb-0">

                <div className="container-fluid">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-airplane-airport-vitaliy-gorbachev-fill-vitaly-gorbachev-2.png" alt="" width="50" class="logo" />
                    
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            
                            <li><Link to="/">Home</Link></li>
                        
                            <li><Link to="/Destinos">Destinos</Link></li>

                            <li><Link to="/Promocoes">Promoções</Link></li>

                            <li><Link to="/AtendimentoContato">Contato</Link></li>

                            <li><Link to="/Cadastro">Cadastro</Link></li> 
                        </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;