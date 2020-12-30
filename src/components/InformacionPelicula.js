import React from 'react';


const InformacionPelicula = ({busqueda}) => {

    const {Title, Country, Director, Genre, Language, Plot, Poster, Production, Ratings, Runtime, Type, Year, Actors,  Awards} = busqueda;

    if(!Title) return null;


    return ( 
        <div className="info-peliculas">
        <h2>{Title}</h2>
            <div className="secciones">
                <div className="poster">
                    <img src={Poster} alt="Imagen Pelicula"/>
                    <div className="card">
                        <p>Año: <span>{Year}</span></p>
                        <p>Duración: <span>{Runtime}</span></p>
                        <p>Género: <span>{Genre}</span></p>
                        <p>Tipo: <span>{Type}</span></p>
                        <p>Director: <span>{Director}</span></p>
                        <p>Actores: <span>{Actors}</span></p>
                        <p>País: <span>{Country}</span></p>
                        <p>Idioma: <span>{Language}</span></p>
                        <p>Producción: <span>{Production}</span></p>
                    </div>
                </div>

                <div className="informacion">

                    <div className="info">
                        <h2>Trama:</h2>
                        <p>{Plot}</p>
                    </div>
                    <div className="info">
                        <h2>Premios y Nominaciones:</h2>
                        <p>{Awards}</p>
                    </div>
                    <div className="info">
                        <h2>Ratings:</h2>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default InformacionPelicula;