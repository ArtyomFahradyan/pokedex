import { createSelector } from "reselect";
import { PokemonsStore } from "./types";

type State = { pokemons: PokemonsStore };

const getMainState = (state: State) => state.pokemons;
const getPokemons = createSelector(getMainState, (store) => store.pokemons);
export default {
  getPokemons,
};
