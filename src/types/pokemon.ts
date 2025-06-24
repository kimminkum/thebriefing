// src/types/pokemon.ts

/** 포켓몬 통계 항목 이름들(최대 stat 기준값의 키) */
export const maxStats = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 180,
} as const;

/** maxStats 객체의 키 중 하나로 제한된 타입 */
export type StatName = keyof typeof maxStats;

/** `/api/v2/type` 엔드포인트의 응답 형태 */
export interface PokemonTypeResponse {
  results: { name: string }[];
}

/** `/api/v2/type/{type}` 엔드포인트의 응답 형태 */
export interface PokemonByTypeResponse {
  pokemon: Array<{
    pokemon: {
      name: string;
      url: string;
    };
  }>;
}

/**
 * `/pokemon/{id or name}` 엔드포인트가 반환하는,
 * stats 배열 하나하나의 타입
 */
export interface PokemonStat {
  base_stat: number;
  stat: {
    name: StatName;
    url: string;
  };
}

/** `/pokemon/{id or name}` 엔드포인트의 상세 응답 타입 */
export interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStat[];
}
