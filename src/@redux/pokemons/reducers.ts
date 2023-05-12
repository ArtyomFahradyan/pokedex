import { Payload } from "types";
import { cloneDeep } from "lodash";
import types, { PokemonsStore } from "./types";

export const initialValues: PokemonsStore = {
  pokemons: [],
};

export default function (
  state: PokemonsStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };

    case types.CLEAR:
      return cloneDeep(initialValues);
    default:
      return state;
  }
}
