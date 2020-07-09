/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { FaShoppingCart } from 'react-icons/fa'

function Catalog() {
  const [pokemon, setPokemon] = useState([]);
  const [imgPokemon, setImgPokemon] = useState([]);
  const [infoPokemon, setInfoPokemon] = useState([]);
  
  useEffect(() => {

  axios.get("https://pokeapi.co/api/v2/pokemon?limit=12&offset=200").then( res => { 
    setPokemon(res.data.results) 
    
    res.data.results.map( res =>(
      axios.get(`https://pokeapi.co/api/v2/pokemon/${res.name}`).then( resInfo => {
        setImgPokemon(imgPokemon.concat(resInfo.data.sprites.back_default))
        setInfoPokemon(resInfo.data.abilities[0].ability.name);
       }) 
    ))
  })
  }, []);
  
  return <>
    <div className="catalog-pokemon">

    { pokemon.map( poke => (
      <div key={poke.name}>
        <div className="card-pokemon">
        <div className="card-pokemon-text">
          <img className="img-pokemon" src={imgPokemon[0]} alt=""/>
          <div className="title-card-pokemon">
            <h2>{poke.name}</h2>
            <div className="desc">{infoPokemon}</div>
            <div className="actions">
              <button>Comprar <FaShoppingCart /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )) }
    
    </div>
  </>;
}

export default Catalog;