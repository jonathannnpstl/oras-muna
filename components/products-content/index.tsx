import { Product } from "@/lib/definition";
import ProductCard from "../product-card";
import { fetchProducts } from "@/lib/api/data";
import Sort from "../filter/sort";

export default async function ProductsContent({ products }: any) {
  // const rows = [];
  // for (let i = 0; i < 4; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(<ProductCard key={i} />);
  // }
  // console.log(products);

  // const resultsText = products.length > 1 ? "results" : "result";
  return (
    <>
      {/* <div className="flex justify-between items-center">
        {q.query ? (
          <p className="mb-4 text-gray-600">
            {products.length === 0
              ? "There are no products that match"
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{q.query}&quot;</span>
          </p>
        ) : (
          <p>All products</p>
        )}
        <Sort />
      </div> */}
      {/* <div className="grid w-full grid-cols-auto gap-4">
        {products &&
          products.map((product: any, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
      </div> */}
    </>
  );
}
