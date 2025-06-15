// src/hooks/usePokemon.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePokemon() {
  return useQuery({
    // 1) 키
    queryKey: ["pokemonList"],
    // 2) 데이터 패칭 함수
    queryFn: async () => {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
      return data.results as { name: string; url: string }[];
    },
    // 3) 옵션
    staleTime: 1000 * 60 * 5, // 5분 캐시
    retry: 2 // 재시도 2회
  });
}
