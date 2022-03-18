import React, { Component }  from 'react';
export default function AtendimentoContato() {
    return ( 
        <>
                <div className="mform">
                <h1 className="primary-color display-6 text-center fw-bold my-5">Contato</h1>
                <form id="contForm">
                    
                        <label>Nome: </label><br />
                        <input class="input" type="text" /><br />

                        <label>E-mail: </label><br />
                        <input class="input" type="email" /><br />

                        <label>Mensagem: </label><br />
                        <textarea name="msg" id="msg"></textarea><br />

                        <input id="btn-enviar" type="submit" value="Enviar" />

                    </form>
            </div>
        </>
    );
}
