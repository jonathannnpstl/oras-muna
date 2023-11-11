import ProductCard from "../product-card";

export default function ProductsContent() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ProductCard key={i} />);
  }
  return <div className="grid grid-cols-auto gap-4">{rows}</div>;
}
