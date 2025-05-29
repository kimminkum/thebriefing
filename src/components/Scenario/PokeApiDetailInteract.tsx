// PokeApiDetailInteract.tsx
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";

interface Stat {
  base_stat: number;
  stat: { name: string };
}
interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  stats: Stat[];
}

const Container = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-family: Pretendard, sans-serif;
  max-width: 100%;
`;

const Filter = styled.select`
  margin-bottom: 1rem;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f5f7fa;
  color: #333;
  font-family: inherit;
  appearance: none;

  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;

  /* 스크롤바 스타일 커스터마이징 */
  scrollbar-width: thin;
  scrollbar-color: #888 transparent; /* Firefox용 */

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const PokemonCard = styled.div`
  flex: 0 0 auto;
  width: 320px;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const PokemonImage = styled.img`
  width: 96px;
  height: 96px;
  image-rendering: pixelated;
`;

const StatBar = styled.div<{ $percent: number }>`
  height: 6px;
  background: linear-gradient(to right, #4cc9f0, #4361ee);
  width: ${({ $percent }) => `${$percent}%`};
  border-radius: 4px;
`;

const StatContainer = styled.div`
  margin-top: 0.5rem;
  div {
    margin: 4px 0;
  }
`;

const StatLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const PokeApiDetailInteract: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [typeOptions, setTypeOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const results = res.data.results;

      const detailed = await Promise.all(
        results.map((p: any) => axios.get(p.url).then((res) => res.data))
      );

      setPokemons(detailed);

      // 타입 목록 추출 및 정리
      const allTypes = detailed.flatMap((p) =>
        p.types.map((t: { type: { name: string } }) => t.type.name)
      );
      const uniqueTypes = Array.from(new Set(allTypes)).sort();
      setTypeOptions(uniqueTypes);
    };

    fetchPokemons();
  }, []);

  const filtered = useMemo(() => {
    return typeFilter
      ? pokemons.filter((p) => p.types.some((t) => t.type.name === typeFilter))
      : pokemons;
  }, [pokemons, typeFilter]);

  const getStat = (p: Pokemon, statName: string) =>
    p.stats.find((s) => s.stat.name === statName)?.base_stat || 0;

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <h3>📊 포켓몬 능력 도감</h3>
      <p style={{ fontSize: "0.85rem", color: "#555" }}>
        타입별 필터 및 능력치를 시각적으로 비교해 보세요.
      </p>

      <Filter
        className="font-18"
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="">모든 타입</option>
        {typeOptions.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </Filter>

      <ScrollContainer>
        {filtered.map((p) => (
          <PokemonCard key={p.id}>
            <PokemonImage src={p.sprites.front_default} alt={p.name} />
            <div>
              <strong>
                #{p.id.toString().padStart(3, "0")} {p.name.toUpperCase()}
              </strong>
              <div>타입: {p.types.map((t) => t.type.name).join(", ")}</div>
              <StatContainer>
                {[
                  "hp",
                  "attack",
                  "defense",
                  "special-attack",
                  "special-defense",
                  "speed"
                ].map((statKey) => (
                  <div key={statKey}>
                    <StatLabel>
                      <span>{statKey.replace("-", " ").toUpperCase()}</span>
                      <span>{getStat(p, statKey)}</span>
                    </StatLabel>
                    <StatBar $percent={getStat(p, statKey) / 2} />
                  </div>
                ))}
              </StatContainer>
            </div>
          </PokemonCard>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default PokeApiDetailInteract;
