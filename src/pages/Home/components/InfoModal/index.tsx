import React, { useEffect, useState } from "react";
import {
  Button,
  message,
  Modal,
  Row,
  Col,
  Statistic,
  Image,
  Tag,
  Space,
  Typography,
} from "antd";
import useRequest from "@ahooksjs/use-request";
import Spinner from "components/Spinner";
const { Title } = Typography;
type Props = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  url: string;
};
type Stat = { base_stat: number; stat: { name: string } };

type Type = { type: { name: string } };
type Ability = { ability: { name: string } };
type Pokemon = {
  name: string;
  id: string;
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
};

function InfoModal({ setIsOpen, isOpen, url }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const handleClose = () => {
    setIsOpen(false);
    setPokemon(null);
  };

  const { loading, run: getPoke } = useRequest(url, {
    manual: true,
    onError: () => {
      message.error("Cannot get poke");
    },
    onSuccess: (pokemon: Pokemon) => {
      // eslint-disable-next-line no-console
      console.log(pokemon);
      setPokemon(pokemon);
    },
  });

  useEffect(() => {
    if (url && isOpen) {
      getPoke();
    }
  }, [url, isOpen]);

  return (
    <Modal
      open={isOpen}
      title={pokemon?.name}
      onOk={handleClose}
      onCancel={handleClose}
      width="90%"
      footer={[
        <Button key="back" onClick={handleClose}>
          Close
        </Button>,
      ]}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Row gutter={16}>
            <Col span={12}>
              {pokemon?.id && (
                <Image
                  preview={false}
                  width={200}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
                />
              )}
            </Col>
            <Col span={12}>
              <Title level={3}>Statistics</Title>
              {pokemon?.stats?.map((stat: Stat) => {
                return (
                  <Statistic
                    key={stat.stat.name}
                    title={stat.stat.name}
                    value={stat.base_stat}
                    suffix="/ 100"
                  />
                );
              })}
            </Col>
          </Row>
          <Space direction="vertical">
            <div>
              <Title level={3}>Types</Title>
              {pokemon?.types?.map(({ type }: Type) => {
                return <Tag key={type.name}>{type.name}</Tag>;
              })}
            </div>
            <div>
              <Title level={3}>Abilities</Title>
              {pokemon?.abilities?.map(({ ability }: Ability) => {
                return <Tag key={ability.name}>{ability.name}</Tag>;
              })}
            </div>
          </Space>
        </>
      )}
    </Modal>
  );
}

export default InfoModal;
