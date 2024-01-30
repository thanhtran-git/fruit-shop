import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails";

export default function DetailsPage({ fruits }) {
  const router = useRouter();
  const { id } = router.query;

  const currentFruit = fruits.find((fruit) => fruit.id === id);

  return (
    <>
      <ProductDetails>
        imageUrl={currentFruit.imageUrl}
        name={currentFruit.name}
        price={currentFruit.price}
        color={currentFruit.color}
        taste={currentFruit.taste}
      </ProductDetails>
    </>
  );
}
