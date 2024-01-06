import { Product } from "@/lib/definition";
import ProductCard from "../product-card";
import { fetchProducts } from "@/lib/api/data";
import Sort from "../filter/sort";

export default async function ProductsContent({ q }: any) {
  const products = await fetchProducts({
    query: q.query,
    sortKey: q.sortKey,
    reverse: q.reverse,
    brand: q.brand,
  });

  const resultsText = products.length > 1 ? "results" : "result";
  return (
    <>
      <div className="flex justify-between items-center">
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
      </div>
      <div className="grid w-full grid-cols-auto gap-4">
        {products &&
          products.map((product: any, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </>
  );
}
