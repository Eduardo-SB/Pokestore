import React from 'react';
import './global.css';
import Header from './components/header';
import SearchPokemon from './components/search';
import CatalogPokemon from './components/catalog';
import CartPokemon from './components/cart';

function App() {
  return (
   <>
    <Header />

    <SearchPokemon />

    <div className="container-pokemon">
      <CatalogPokemon />
      <CartPokemon />
    </div>
    
   </>
  );
}

export default App;
