import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'


function App() {


  const [pelicula, guardarPelicula] = useState({
    titulo: '',
    year: '',
    trama: ''
  });

  const [consulta, guardarConsultar] = useState(false);

  return (
    <Fragment>


    <Header />
    <div className="contenedor">
      <div className="contenido">
        <Formulario 
          pelicula={pelicula}
          guardarPelicula={guardarPelicula}
          guardarConsultar={guardarConsultar}
        
        />
      </div>
    </div>

    </Fragment>

  );
}

export default App;
