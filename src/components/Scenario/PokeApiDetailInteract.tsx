import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  DexWrapper,
  SelectTitle,
  StyledSelect,
  CardWrapper,
  NameBar,
  ImageBox,
  StatsBox,
  Badge,
  SelectRow,
  StatRow,
  StatLabel,
  StatBarWrapper,
  StatBarFill,
  StatValue
} from "../../styles/StyledPokeCard";

const PokeApiDetailInteract: React.FC = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState("electric");
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  const maxStats = {
    hp: 255,
    attack: 190,
    defense: 230,
    "special-attack": 194,
    "special-defense": 230,
    speed: 180
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      const filtered = res.data.results
        .map((t: any) => t.name)
        .filter((name: string) => name !== "unknown" && name !== "stellar");
      setTypes(filtered);
    });
  }, []);

  useEffect(() => {
    if (selectedType) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((res) => {
          const sliced = res.data.pokemon.slice(0, 7); // 최대 7마리
          Promise.all(
            sliced.map((p: any) => axios.get(p.pokemon.url).then((r) => r.data))
          ).then(setPokemonList);
        });
    }
  }, [selectedType]);

  return (
    <DexWrapper onClick={(e) => e.stopPropagation()}>
      <SelectRow>
        <SelectTitle className="font-20">📘 도감 타입 선택</SelectTitle>
        <StyledSelect
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
          className="font-16"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </StyledSelect>
      </SelectRow>

      <Swiper
        spaceBetween={12}
        slidesPerView={1.2}
        grabCursor
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          }
        }}
      >
        {pokemonList.map((data) => (
          <SwiperSlide key={data.id}>
            <CardWrapper poketype={selectedType}>
              <NameBar>{data.name.toUpperCase()}</NameBar>
              <ImageBox>
                <img src={data.sprites.front_default} alt={data.name} />
              </ImageBox>
              <StatsBox>
                {data.stats.map((stat: any) => {
                  const name = stat.stat.name;
                  const value = stat.base_stat;
                  const max = maxStats[name as keyof typeof maxStats] || 100;
                  const percent = Math.round((value / max) * 100);

                  return (
                    <StatRow key={name}>
                      <StatLabel>{name.toUpperCase()}</StatLabel>
                      <StatBarWrapper>
                        <StatBarFill percent={percent} />
                        <StatValue>{value}</StatValue>
                      </StatBarWrapper>
                    </StatRow>
                  );
                })}
              </StatsBox>
              <Badge>{selectedType.toUpperCase()}</Badge>
            </CardWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </DexWrapper>
  );
};

export default PokeApiDetailInteract;
