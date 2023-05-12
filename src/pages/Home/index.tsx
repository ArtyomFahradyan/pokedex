import React, { useState } from "react";
import { useSelector } from "react-redux";
import { List, message, Pagination } from "antd";
import useRequest from "@ahooksjs/use-request";
import { usePokemonsActions, PokemonsSelectors } from "@redux";
import SearchInput from "components/SearchInput";
import InfoModal from "./components/InfoModal";
import ListItem from "./components/ListItem";
import { Pokemon } from "../../types";

function Home() {
  const { setPokemons } = usePokemonsActions();
  const pokemons = useSelector(PokemonsSelectors.getPokemons);
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState("");

  const { loading: getPokesLoading, run: runGetList } = useRequest(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    {
      refreshDeps: [offset, limit],
      onSuccess: (pokes) => {
        setTotal(pokes.count);
        setPokemons(pokes.results);
      },
      onError: () => {
        message.error("Cannot load pokes");
      },
    }
  );

  const { loading: searchLoading, run: runSearchPokemon } = useRequest(
    (pokeName) => `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
    {
      manual: true,
      onError: () => {
        message.error("Cannot load pokes");
      },
      onSuccess: (pokes) => {
        setTotal(1);
        setOffset(0);
        setPokemons([pokes.forms[0] as Pokemon]);
      },
    }
  );

  const onPaginationChange = (page: number, pageSize: number) => {
    setOffset(page * pageSize);
    setLimit(pageSize);
  };

  const handleSearch = (value: string) => {
    setOffset(0);
    if (value) {
      try {
        runSearchPokemon(value);
      } catch (e) {
        console.error(e);
      }
    } else {
      runGetList();
    }
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} placeholder="Search" />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 5,
        }}
        loading={getPokesLoading || searchLoading}
        dataSource={pokemons}
        renderItem={(pokemon) => (
          <ListItem
            pokemon={pokemon}
            setIsOpen={setIsOpen}
            setSelected={setSelected}
          />
        )}
      />
      {total ? (
        <Pagination
          defaultCurrent={offset / limit}
          defaultPageSize={limit}
          total={total}
          onChange={onPaginationChange}
        />
      ) : null}
      <InfoModal setIsOpen={setIsOpen} isOpen={isOpen} url={selected} />
    </>
  );
}

export default Home;
