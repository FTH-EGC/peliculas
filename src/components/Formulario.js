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
            className="inputs"
            placeholder="Ej. Guardians of the Galaxy Vol. 2"
        />
        <label htmlFor="year">Año:</label>
        <input
            type="text"
            name="year"
            className="inputs"
            placeholder="Ej. 2017"
        />
        <label htmlFor="trama">Trama:</label>
        <select 
            name="trama"
            className="inputs"
        >
            <option value="!#">--Seleccione--</option>
            <option value="short">Pequeña</option>
            <option value="full">Completa</option>
        </select>

        <input 
            type="submit"
            value="Buscar"
            className="boton"
        />
        </form>

     );
}
 
export default Formulario;