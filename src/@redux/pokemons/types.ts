import { Pokemon } from "types";

export default {
  SET_POKEMONS: "SET_POKEMONS",
  CLEAR: "CLEAR",
};

export type PokemonsStore = {
  pokemons: Pokemon[];
};
