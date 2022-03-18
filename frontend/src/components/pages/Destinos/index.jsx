import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../layout/Card';
import './style.css';

function Destinos() {
    return (
        <>
        <div className="container vh-90">
            <h1 className="primary-color display-6 text-center fw-bold my-5">Destinos</h1>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHVnYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            title="Porto, em Portugal"
            price="5.380,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1561789474-cb8a3cb4e319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFyaXpvbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            title="Arizona, nos Estados Unidos"
            price="4.270,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1557974040-3bec341da09b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FudGlhZ28lMjBjaGlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            title="Santiago, no Chile"
            price="2.789,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://media.istockphoto.com/photos/iguacu-impressive-4-falls-and-green-rainforest-brazil-south-america-picture-id498014429?b=1&k=20&m=498014429&s=170667a&w=0&h=aw5mHQ3iGa5_9PpjDP8aAA_hPQAaWOMwR6xhV1ZJYmg=" 
            title="Foz do Iguaçu, no Brasil"
            price="1.300,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1542649350-a24209ce01b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            title="Los Angeles, nos Estados Unidos"
            price="5.180,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="Dubai, nos Emirados Árabes"
            price="7.880,00"
        />
    </div>

</div>
</div>
    </>
);
}

export default Destinos;