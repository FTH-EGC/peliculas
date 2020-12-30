import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'


function App() {


  const [pelicula, guardarPelicula] = useState({
    titulo: '',
    year: '',
    trama: ''
  });
  const {titulo, year, trama} = pelicula;
  const [consulta, guardarConsultar] = useState(false);
  const [noexiste, guardarNoExiste] = useState(false);


  useEffect(() => {

    if(consulta){
      const consultarAPI = async () => {
        const url = `http://www.omdbapi.com/?t=${titulo}&y=${year}&plot=${trama}&apikey=3aefd129`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        console.log(resultado);

        if(resultado.Error === "Movie not found!"){
          guardarNoExiste(true);

        }else{
          guardarNoExiste(false);
        }
        
        guardarConsultar(false);


  
      }
      consultarAPI();
    }



  }, [consulta, titulo, year, trama])


  return (
    <Fragment>


    <Header />
    <div className="contenedor">
      <div className="contenido">
        <Formulario 
          pelicula={pelicula}
          guardarPelicula={guardarPelicula}
          guardarConsultar={guardarConsultar}
          noexiste={noexiste}
          guardarNoExiste={guardarNoExiste}
        />
      </div>
    </div>

    </Fragment>

  );
}

export default App;
