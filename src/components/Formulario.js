import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({pelicula, guardarPelicula,guardarConsultar, noexiste}) => {


    const [error, guardarError] = useState(false);
    const {titulo, trama} = pelicula;

    const onSubmit = e => {
        e.preventDefault();

        // Validar

        if(titulo.trim() === "" || trama.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);

    }



    const onChange = e => {
        guardarPelicula({
            ...pelicula,
            [e.target.name] : e.target.value
        })
    }


    return ( 

        <form action=""
        className="formulario"
        onSubmit={onSubmit}
        >
            {error ? <Error mensaje="Los campos Titulo y Trama son obligatorios" /> : null}
            {noexiste ? 
                <Error mensaje="Pelicula no encontrada, intente nuevamente" />
                :
                null
            }
        <label htmlFor="titulo">Titulo de la pelicula:</label>
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