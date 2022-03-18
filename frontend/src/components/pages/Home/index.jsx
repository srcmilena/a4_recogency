import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function Home() {
    return (
        <>
        <div class="container-fluid mt-3">
            <main role="main" class="pb-3">
                <div class="jumbotron-fluid jumbotron d-flex">

                    <div class="w-100 text-center">
                        <h1 class="display-4">Bem-vinda(o) a Recogency!</h1>
                        <h4>A sua agência de viagem.</h4>
                        <br />
                        <p>Nós da Recogency, somos uma agência de viagens on-line; De origem brasileira, e que trabalha com pacotes de viagens com voos (apenas) com origem no Aeroporto Internacional de Guarulhos (GRU), em São Paulo. <br /> Temos nos consolidado cada dia mais, como uma das maiores agências de turismo online do Brasil. Nossa viagem começou recentemente com o intuito de desbravar os 7 mares e trazer as melhores ofertas de viagens. Desde então não paramos de crescer cada dia mais.</p>
                        <hr />

                        <p>Os valores presentes nas páginas de promoções e destinos, são para intervalos de 15 dias. <br />
                    Ou seja, o espaço entre a data de saída e a data de retorno devem ser de 15 dias.</p>
                        
                    </div>
                </div>
            </main>
        </div>

        </>
    );
}