import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Pokemon, Dispatch } from "types";
import types from "./types";

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  const setPokemons = useCallback(
    (payload: Pokemon[]) => {
      dispatch({ type: types.SET_POKEMONS, payload });
    },
    [dispatch]
  );

  const clear = useCallback(() => {
    dispatch({ type: types.CLEAR });
  }, [dispatch]);

  return {
    setPokemons,
    clear,
  };
}
