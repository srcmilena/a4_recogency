import React, { Component }  from 'react';
import './style.css';

export default function Cadastro() {
    return ( 
        <>
        <div className="mform">
        <h1 className="primary-color display-6 text-center fw-bold my-5">Cadastro</h1>
        <main class="main-pags">
            <form id="contForm">
                
                    <label>Nome: </label><br />
                    <input class="input" type="nome" /><br />

                    <label>Origem: </label><br />
                    <input class="input" type="origem" /><br />

                    <label>Destino: </label><br />
                    <input class="input texto" type="destino" /><br />

                    <label>Saída: </label><br />
                    <input class="input" type="saida" /><br />

                    <label>Retorno: </label><br />
                    <input class="input" type="retorno" /><br />

                    <label>Preço: </label><br />
                    <input class="input" type="preco" /><br />
            
                        <input id="btn-enviar" type="submit" value="Enviar" />

                    </form>
                    </main>
            </div>
        </>
    );
}
