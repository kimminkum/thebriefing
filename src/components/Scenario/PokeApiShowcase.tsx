import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import type { Stat } from '../../types/pokemon';
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
  SelectRow,
  PokeSpinner,
  LoadingWrapper,
  LoadingText,
  ErrorText,
} from '../../styles/StyledPokeCard';

const POKEMON_OPTIONS = ['pikachu', 'charmander', 'bulbasaur', 'squirtle', 'eevee'] as const;

export default function PokeApiShowcase() {
  // 1) 선택된 포켓몬 이름
  const [selected, setSelected] = useState<(typeof POKEMON_OPTIONS)[number]>(POKEMON_OPTIONS[0]);

  // 2) React Query: 선택된 포켓몬 정보 패칭
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon', selected],
    queryFn: async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`);
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5분 캐시 유지
    retry: 2, // 실패 시 2회 재시도
  });

  const getType = () => (data?.types?.[0]?.type?.name as string) || 'default';

  if (isLoading) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <LoadingText>포켓몬 정보를 불러오는 중…</LoadingText>
      </LoadingWrapper>
    );
  }
  if (isError) {
    return (
      <LoadingWrapper>
        <PokeSpinner />
        <ErrorText>에러 발생: {(error as Error).message}</ErrorText>
      </LoadingWrapper>
    );
  }

  return (
    <ShowcaseWrapper onClick={(e) => e.stopPropagation()}>
      {/* 선택 박스 */}
      <SelectRow>
        <SelectTitle className="font-20">🔍 포켓몬 선택</SelectTitle>
        <StyledSelect
          value={selected}
          onChange={(e) => setSelected(e.target.value as (typeof POKEMON_OPTIONS)[number])}
          className="font-16"
        >
          {POKEMON_OPTIONS.map((name) => (
            <option key={name} value={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
          ))}
        </StyledSelect>
      </SelectRow>

      {/* 카드 */}
      {data && (
        <CardWrapper poketype={getType()}>
          <NameBar>{data.name.toUpperCase()}</NameBar>
          <ImageBox>
            <Image
              src={data.sprites.front_default}
              alt={data.name}
              width={120}
              height={200}
              unoptimized // 외부 이미지 최적화가 불가할 때 명시
              style={{ objectFit: 'cover' }}
            />
          </ImageBox>
          <InfoBox>
            <InfoItem>
              ID <span className="value">#{data.id}</span>
            </InfoItem>
            <InfoItem>
              Height <span className="value">{data.height / 10} m</span>
            </InfoItem>
            <InfoItem>
              Weight <span className="value">{data.weight / 10} kg</span>
            </InfoItem>
            <InfoItem>
              Speed{' '}
              <span className="value">
                {(data.stats as Stat[]).find((s) => s.stat.name === 'speed')?.base_stat}
              </span>
            </InfoItem>
          </InfoBox>
          <Badge>{getType().toUpperCase()}</Badge>
        </CardWrapper>
      )}
    </ShowcaseWrapper>
  );
}
