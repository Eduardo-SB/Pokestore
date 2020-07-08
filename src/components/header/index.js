import React from 'react';
import './style.css';

import Pikachu from '../../img/pikachu.png';
import Pokestore from '../../img/pokestore.png';

function header() {
  return <>
    <div className="container-header">
      <div className="img-header">
        <img className="size-img-pokestore" src={Pokestore} alt="pokestore"/>
        <img className="size-img-pikachu" src={Pikachu} alt="pikachu"/>
      </div>
    </div>
  </>
  ;
}

export default header;