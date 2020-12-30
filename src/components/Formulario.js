import React, { useState } from 'react';


const Formulario = () => {


    const [pelicula, guardarPelicua] = useState({
        titulo: '',
        year: '',
        trama: ''
    });

    const onChange = e => {
        guardarPelicua({
            ...pelicula,
            [e.target.name] : e.target.value
        })
    }


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
            onChange={onChange}
        />
        <label htmlFor="year">Año:</label>
        <input
            type="text"
            name="year"
            className="inputs"
            placeholder="Ej. 2017"
            onChange={onChange}
        />
        <label htmlFor="trama">Trama:</label>
        <select 
            name="trama"
            className="inputs"
            onChange={onChange}
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