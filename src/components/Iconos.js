import React from 'react';
import IMDb from '../assets/img/imdb-logo.svg';
import MetaCritic from '../assets/img/Metacritic.svg';
import Rotten from '../assets/img/rotten-tomatoes.svg';
import PropTypes from 'prop-types'




const Iconos = ({rating}) => {

    const {Source, Value} = rating;

    let imagen;
    switch(Source){
        case 'Internet Movie Database':
             imagen = IMDb;
            break;
        case 'Rotten Tomatoes':
             imagen = Rotten;
        break;
        case 'Metacritic':
             imagen = MetaCritic;
        break;
        default:
            break;
    }

    return ( 

            <div className="icono">
                <img src={imagen} alt="Imagen Iconos"/>
                <p>{Value}</p>
            </div>

     );
}
 
Iconos.propTypes = {
    rating: PropTypes.object.isRequired
}

export default Iconos;