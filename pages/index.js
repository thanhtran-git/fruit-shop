import { fruits } from "../lib/data";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FruitCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
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
      <ItemsContainer>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id}>
            <ImageContainer>
              <Link href={`/productdetails/${fruit.id}`}>
                <StyledImage
                  src={fruit.imageUrl}
                  alt={fruit.name}
                  fill={true}
                />
              </Link>
            </ImageContainer>

            <h2>{fruit.name}</h2>
            <p>Price: {fruit.price}</p>
            <button>Add to Cart</button>
            <button> Favorite </button>
          </FruitCard>
        ))}
      </ItemsContainer>
    </>
  );
}
