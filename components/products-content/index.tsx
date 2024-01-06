import ProductCard from "../product-card";
import { fetchProducts } from "@/lib/api/data";
import PageItem from "./pagination";

export default async function ProductsContent({ q }: any) {
  const { products, numberOfPages } = await fetchProducts({
    query: q.query,
    sortKey: q.sortKey,
    reverse: q.reverse,
    brand: q.brand,
    skip: parseInt(q.page),
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
      <div className="flex justify-center gap-2 relative m-12">
        {Array(numberOfPages)
          .fill(0)
          .map((_, i) => {
            return <PageItem key={i} number={i + 1} len={numberOfPages} />;
          })}
      </div>
    </>
  );
}
