import React from 'react';


const Formulario = () => {
    return ( 

        <form action=""
        className="formulario"
        >
        <label htmlFor="titulo">Titulo de la pelicula</label>
        <input
            type="text"
            name="titulo"

        />
        <label htmlFor="year">Año:</label>
        <input
            type="text"
            name="year"
        />
        <label htmlFor="trama">Trama:</label>
        <select 
        name="trama">
            <option value="!#">--Seleccione--</option>
            <option value="short">Pequeña</option>
            <option value="full">Completa</option>
        </select>

        <input 
            type="submit"
            value="Buscar"
        />
        </form>

     );
}
 
export default Formulario;