import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #ddd;
  font-family: Pretendard, sans-serif;
  max-width: 480px;
  margin: 0 auto;

  h3 {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
    line-height: 1;
    color: #555;
  }
`;

const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  margin: 1rem auto;
  animation: ${bounceIn} 0.8s ease-out;
`;

const PokeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const PokeApiShowcase: React.FC = () => {
  const [selected, setSelected] = useState("pikachu");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
      .then((res) => setData(res.data));
  }, [selected]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <h3>🧪 PokeAPI Showcase</h3>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        포켓몬의 이름을 선택하면 관련 이미지와 정보가 나타납니다.
      </p>
      <Select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="pikachu">Pikachu</option>
        <option value="charmander">Charmander</option>
        <option value="bulbasaur">Bulbasaur</option>
        <option value="squirtle">Squirtle</option>
        <option value="eevee">Eevee</option>
      </Select>
      {data && (
        <>
          <ImageBox>
            <PokeImage src={data.sprites?.front_default} alt={data.name} />
          </ImageBox>
          <Info>
            <h4>{data.name.toUpperCase()}</h4>
            <p>ID: {data.id}</p>
            <p>Type: {data.types.map((t: any) => t.type.name).join(", ")}</p>
          </Info>
        </>
      )}
    </Container>
  );
};

export default PokeApiShowcase;
