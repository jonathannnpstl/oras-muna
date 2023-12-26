import { Product } from "@/lib/definition";
import ProductCard from "../product-card";

export default function ProductsContent({ products }: { products: Product[] }) {
  // const rows = [];
  // for (let i = 0; i < 4; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(<ProductCard key={i} />);
  // }
  // console.log(products);

  return (
    <div className="grid w-full grid-cols-auto gap-4">
      {products &&
        products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  );
}
