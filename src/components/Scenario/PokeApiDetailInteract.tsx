import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import type {
  PokemonTypeResponse,
  PokemonByTypeResponse,
  PokemonDetail,
  PokemonStat,
  StatName,
} from '../../types/pokemon';

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
  StatValue,
  PokeSpinner,
  LoadingWrapper,
  LoadingText,
  ErrorText,
} from '../../styles/StyledPokeCard';

const DEFAULT_TYPE = 'electric';

export default function PokeApiDetailInteract() {
  // 1) 타입 목록 조회
  const {
    data: types,
    isLoading: typesLoading,
    isError: typesError,
  } = useQuery({
    queryKey: ['pokemonTypes'],
    queryFn: async () => {
      const { data } = await axios.get<PokemonTypeResponse>('https://pokeapi.co/api/v2/type');

      return data.results
        .map((t) => t.name)
        .filter((name) => name !== 'unknown' && name !== 'stellar');
    },
    staleTime: 1000 * 60 * 60, // 1시간 캐시
  });

  // 2) 선택된 타입
  const [selectedType, setSelectedType] = useState<string>(DEFAULT_TYPE);

  // 3) 해당 타입별 포켓몬 정보 조회 (최대 7마리)
  const {
    data: pokemonList,
    isLoading: listLoading,
    isError: listError,
  } = useQuery({
    queryKey: ['pokemonByType', selectedType],
    queryFn: async () => {
      const { data } = await axios.get<PokemonByTypeResponse>(
        `https://pokeapi.co/api/v2/type/${selectedType}`,
      );
      const sliced = data.pokemon.slice(0, 7);
      const details = await Promise.all(
        sliced.map((p) => axios.get<PokemonDetail>(p.pokemon.url).then((res) => res.data)),
      );
      return details;
    },
    enabled: !!selectedType, // 타입 선택 후에만 실행
  });

  if (typesLoading) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <LoadingText>타입 목록을 불러오는 중…</LoadingText>
      </LoadingWrapper>
    );
  }
  if (typesError) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <ErrorText>타입 목록 조회 에러</ErrorText>
      </LoadingWrapper>
    );
  }
  if (listLoading) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <LoadingText>포켓몬 목록을 불러오는 중…</LoadingText>
      </LoadingWrapper>
    );
  }
  if (listError) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <ErrorText>포켓몬 목록 조회 에러</ErrorText>
      </LoadingWrapper>
    );
  }

  // 최대 stat 기준값
  const maxStats = {
    hp: 255,
    attack: 190,
    defense: 230,
    'special-attack': 194,
    'special-defense': 230,
    speed: 180,
  };

  return (
    <DexWrapper onClick={(e) => e.stopPropagation()}>
      {/* 타입 선택 */}
      <SelectRow>
        <SelectTitle className="font-20">📘 도감 타입 선택</SelectTitle>
        <StyledSelect
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="font-16"
        >
          {types?.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </StyledSelect>
      </SelectRow>

      {/* 카드 슬라이더 */}
      <Swiper
        spaceBetween={12}
        slidesPerView={1.2}
        grabCursor
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.6, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 24 },
        }}
      >
        {pokemonList?.map((poke) => (
          <SwiperSlide key={poke.id}>
            <CardWrapper poketype={selectedType}>
              <NameBar>{poke.name.toUpperCase()}</NameBar>
              <ImageBox>
                <Image
                  src={poke.sprites.front_default}
                  alt={poke.name}
                  width={120}
                  height={185}
                  unoptimized
                />
              </ImageBox>
              <StatsBox>
                {poke.stats.map((stat: PokemonStat) => {
                  const name: StatName = stat.stat.name;
                  const value = stat.base_stat;
                  const max = maxStats[name];
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
}
