export type Product = {
  _id: object;
  product_id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  tags: [string];
  // quantity: number;
  img: string;
};
export type ProductsCart = {
  item : Product,
  qty: number
}
