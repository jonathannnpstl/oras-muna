export type Product = {
  _id: object;
  name: string;
  brand: string;
  price: number;
  images: string[];
  popularity: number;
  rating: number;
  band_color: string;
  case_material: string;
  dial_color: string;
  stock: number;

  // quantity: number;
};
export type ProductsCart = {
  item: Product;
  qty: number;
  date: number;
};
