import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";

export default function Home () {
  const { getPokemons, pokemons, isLoading } = useContext(PokemonContext);
  
  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if ( isLoading) {
    return <Loading title='Cargando resultados...' />;
  };

  return <PokemonList pokemons={pokemons}/>;
}