import React, {Fragment} from 'react';
import IMDb from '../assets/img/imdb-logo.svg';
import MetaCritic from '../assets/img/Metacritic.svg';
import Rotten from '../assets/img/rotten-tomatoes.svg';




const Iconos = ({rating}) => {

    const {Source, Value} = rating;

    console.log(Source);
    console.log(Value);

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
        <div className="iconos">
            <img src={imagen} alt="Imagen Iconos"/>
            <p>{Source}</p>
            <p>{Value}</p>

        </div>
     );
}
 
export default Iconos;