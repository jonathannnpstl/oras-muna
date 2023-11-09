import Cart from "@/components/cart";
import ProductShowcase from "@/components/product-showcase";
import ProductsContent from "@/components/products-content";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ProductShowcase />
      <Cart />
    </main>
  );
}
