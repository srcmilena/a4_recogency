import React, { Component }  from 'react';
import Card from '../../layout/Card';

function Promocoes() {
    return (
        <>
        <div className="container vh-90">
            <h1 className="primary-color display-6 text-center fw-bold my-5">Promoções</h1>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGdpemElMjBlZ3lwdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            title="Pirâmides de Gizé, no Egito"
            price="3.800,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNhZmFyaSUyMGtlbnlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            title="Safari, no Quênia"
            price="4.900,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://media.istockphoto.com/photos/twelve-apostles-mountain-in-camps-bay-cape-town-south-africa-picture-id477451698?b=1&k=20&m=477451698&s=170667a&w=0&h=uLBJ5ELLZy37XpOJyF1-EA8gGGmsaON_QqwYpK6iIEo=" 
            title="Cidade do Cabo, na África do Sul"
            price="5.200,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF2YW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            title="Havana, em Cuba"
            price="2.600,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9yb250b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            title="Toronto, no Canadá"
            price="4.500,00"
        />
    </div>

    <div className="col">
        <Card
            img="https://images.unsplash.com/photo-1581875403743-a3bf92862c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjY2h1JTIwcGljY2h1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            title="Machu Picchu, no Peru"
            price="2.300,00"
        />
    </div>

</div>
</div>
    </>
);
}

export default Promocoes;