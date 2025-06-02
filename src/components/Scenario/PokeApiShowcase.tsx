import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ShowcaseWrapper,
  StyledSelect,
  CardWrapper,
  NameBar,
  ImageBox,
  InfoBox,
  InfoItem,
  Badge,
  SelectTitle,
  SelectRow
} from "../../styles/StyledPokeCard";

const PokeApiShowcase: React.FC = () => {
  const [selected, setSelected] = useState("pikachu");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
      .then((res) => setData(res.data));
  }, [selected]);

  const getType = () => data?.types?.[0]?.type?.name || "default";

  return (
    <ShowcaseWrapper onClick={(e) => e.stopPropagation()}>
      <SelectRow>
        <SelectTitle className="font-20">🔍 포켓몬 선택</SelectTitle>
        <StyledSelect
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
          className="font-16"
        >
          <option value="pikachu">Pikachu</option>
          <option value="charmander">Charmander</option>
          <option value="bulbasaur">Bulbasaur</option>
          <option value="squirtle">Squirtle</option>
          <option value="eevee">Eevee</option>
        </StyledSelect>
      </SelectRow>

      {data && (
        <CardWrapper poketype={getType()}>
          <NameBar>{data.name.toUpperCase()}</NameBar>
          <ImageBox>
            <img src={data.sprites.front_default} alt={data.name} />
          </ImageBox>
          <InfoBox>
            <InfoItem>
              ID
              <span className="value">#{data.id}</span>
            </InfoItem>
            <InfoItem>
              Height
              <span className="value">{data.height / 10} m</span>
            </InfoItem>
            <InfoItem>
              Weight
              <span className="value">{data.weight / 10} kg</span>
            </InfoItem>
            <InfoItem>
              Speed
              <span className="value">
                {
                  data.stats.find((s: any) => s.stat.name === "speed")
                    ?.base_stat
                }
              </span>
            </InfoItem>
          </InfoBox>
          <Badge>{getType().toUpperCase()}</Badge>
        </CardWrapper>
      )}
    </ShowcaseWrapper>
  );
};

export default PokeApiShowcase;
