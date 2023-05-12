import React from "react";
import { Card, List, Image, Divider } from "antd";
import { getId } from "helpers";
import { Pokemon } from "types";

const { Meta } = Card;

type Props = {
  pokemon: Pokemon;
  setIsOpen: (isOpen: boolean) => void;
  setSelected: (url: string) => void;
};

function ListItem({ pokemon, setIsOpen, setSelected }: Props) {
  const { url, name } = pokemon;

  const handleSelect = (url: string) => {
    setSelected(url);
    setIsOpen(true);
  };

  return (
    <List.Item>
      <Card
        key={name}
        onClick={() => handleSelect(url)}
        hoverable
        cover={
          <Image
            preview={false}
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(
              url
            )}.png`}
          />
        }
      >
        <Divider />
        <Meta title={name} />
      </Card>
    </List.Item>
  );
}

export default ListItem;
