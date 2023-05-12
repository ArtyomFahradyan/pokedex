import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pokemonsReducer from "./pokemons/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    pokemons: pokemonsReducer,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return { store };
};

export default configureStore;
