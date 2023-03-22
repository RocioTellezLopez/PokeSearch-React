import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons}) {
  return (
    <>
      {pokemons?.map((pokemons, index) => (
        <PokemonListItem  key={index} {...pokemons}/>
      ))}
    </>
  );
};