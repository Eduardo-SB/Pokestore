import React from 'react';
import './styles.css';

function search() {
  return <>
    <div className="search-pokemon">
      <input className="input-search-pokemon" type="text" placeholder="Digite o nome do pokémon"/>
    </div>
  </>;
}

export default search;