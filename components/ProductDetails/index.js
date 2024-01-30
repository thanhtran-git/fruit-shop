import Image from "next/image";
export default function ProductDetails(name, price, imageUrl, color, taste) {
  return (
    <>
      <h1>Details</h1>
      <Image src={imageUrl} alt={name} width={400} height={400} />
      <ul>
        <li>Name: {name}</li>
        <li> Price: {price}</li>
        <li>Color: {color}</li>
        <li>Taste: {taste}</li>
      </ul>
    </>
  );
}
