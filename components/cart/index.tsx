import { fetchProducts } from "@/lib/api/data";
import CartModal from "./modal";

export default async function Cart() {
  const product = await fetchProducts();

  return <CartModal product={product} />;
}
