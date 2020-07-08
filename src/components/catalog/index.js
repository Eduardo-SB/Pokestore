/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa'

function Catalog() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {

    setPokemon(axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=200"))
  // .then(function(response){
  //   console.log(response.data); // ex.: { user: 'Your User'}
  //   console.log(response.status); // ex.: 200
  // });  
    
  }, []);

  return <>
    <div className="catalog-pokemon">

    <div className="card-pokemon">
      <div className="card-pokemon-text">
        <img className="img-pokemon" src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt=""/>
        <div className="title-card-pokemon">
          <h2>Morgan Sweeney</h2>
          <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none
            in their pants.</div>
          <div className="actions">
            <button>Comprar <FaShoppingCart /></button>
          </div>
        </div>
      </div>
    </div>

    <div className="card-pokemon">
      <div className="card-pokemon-text">
        <img className="img-pokemon" src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt=""/>
        <div className="title-card-pokemon">
          <h2>Morgan Sweeney</h2>
          <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none
            in their pants.</div>
          <div className="actions">
            <button>Comprar <FaShoppingCart /></button>
          </div>
        </div>
      </div>
    </div>

    <div className="card-pokemon">
      <div className="card-pokemon-text">
        <img className="img-pokemon" src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt=""/>
        <div className="title-card-pokemon">
          <h2>Morgan Sweeney</h2>
          <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none
            in their pants.</div>
          <div className="actions">
            <button>Comprar <FaShoppingCart /></button>
          </div>
        </div>
      </div>
    </div>

    <div className="card-pokemon">
      <div className="card-pokemon-text">
        <img className="img-pokemon" src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt=""/>
        <div className="title-card-pokemon">
          <h2>Morgan Sweeney</h2>
          <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none
            in their pants.</div>
          <div className="actions">
            <button>Comprar <FaShoppingCart /></button>
          </div>
        </div>
      </div>
    </div>

    <div className="card-pokemon">
      <div className="card-pokemon-text">
        <img className="img-pokemon" src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt=""/>
        <div className="title-card-pokemon">
          <h2>Morgan Sweeney</h2>
          <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none
            in their pants.</div>
          <div className="actions">
            <button>Comprar <FaShoppingCart /></button>
          </div>
        </div>
      </div>
    </div>
    
    { pokemon.length }
    
    </div>
  </>;
}

export default Catalog;