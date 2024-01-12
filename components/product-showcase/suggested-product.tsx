import { getRandomProducts } from "@/lib/api/data";
import ProductCard from "../product-card";
import { Product } from "@/lib/definition";

export default async function SuggestedProducts({
  suggestedProducts,
}: {
  suggestedProducts: Product[];
}) {
  return (
    <>
      <div className="flex">
        {/* {suggestedProducts.map((product: Product, i: number) => {
          return <ProductCard key={i} product={product} />;
        })} */}
        Product
      </div>
    </>
  );
}
