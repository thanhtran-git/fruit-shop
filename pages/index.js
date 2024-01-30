import { fruits } from "../lib/data";
import styled from "styled-components";
import Image from "next/image";

const FruitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FruitCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Home() {
  return (
    <>
      <h1>Welcome to the Fruit Shop</h1>
      <FruitContainer>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id}>
            <ImageContainer>
              <StyledImage src={fruit.imageUrl} alt={fruit.name} fill={true} />
            </ImageContainer>

            <h2>{fruit.name}</h2>
            <p>Price: {fruit.price}</p>
            <button>Add to Cart</button>
          </FruitCard>
        ))}
      </FruitContainer>
    </>
  );
}
