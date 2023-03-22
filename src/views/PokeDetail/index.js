import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";

import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";

export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext)

  useEffect(() => {
    // cada que se carga la pantalla o cada que cambie el id solicitar el detalle del pokemon

    getPokemonDetail(id).catch(null)

  }, []);

  console.log(pokemonDetail);


  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);


  if(isLoading) {
    return <Loading title='Cargando pokemon...' />;
  }

  return (
    <div>
      <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info General</h3>
      <p>{`Name: ${pokemonDetail?.name}`}</p>
      <p>{`Peso: ${pokemonDetail?.weight} kg.`}</p>
      <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
      <div>
        <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
        <PokeStats stats={pokemonDetail?.stats ?? []}/>
      </div>
    </div>
  );
}