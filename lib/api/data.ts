"use server";
import clientPromise from "../connection";
import { ObjectId } from "mongodb";
import { ProductsCart } from "../definition";

export async function fetchProducts({
  query,
  sortKey,
  reverse,
  brand,
  page,
}: {
  query?: string;
  sortKey?: string | undefined;
  reverse?: boolean;
  brand?: string | undefined;
  page?: number | undefined;
}): Promise<any | undefined> {
  try {
    let skips = page ? (page - 1) * 9 : 0;
    let products;
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const regex = new RegExp("\\b" + query + "[a-zA-Z]*\\b", "i");
    let count: number = 0;

    if (brand) {
      products = db
        .collection("products")
        .find({ $and: [{ brand: brand }, { name: { $regex: regex } }] });
      count = await db.collection("products").countDocuments({
        $and: [{ brand: brand }, { name: { $regex: regex } }],
      });
    } else {
      products = db.collection("products").find({ name: { $regex: regex } });
      count = await db
        .collection("products")
        .countDocuments({ name: { $regex: regex } });
    }

    if (sortKey === "price") {
      products
        .sort({ price: reverse ? -1 : 1 })
        .skip(skips)
        .limit(9);
    } else if (sortKey === "popularity") {
      products
        .sort({ popularity: reverse ? -1 : 1 })
        .skip(skips)
        .limit(9);
    } else if (sortKey === "rating") {
      products
        .sort({ rating: reverse ? -1 : 1 })
        .skip(skips)
        .limit(9);
    } else {
      products
        .sort({ name: reverse ? -1 : 1 })
        .skip(skips)
        .limit(9);
    }
    const data = {
      products: await products.toArray(),
      numberOfPages: Math.ceil(count / 9),
    };

    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}

export async function fetchProduct(id?: string): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(product));
  } catch (e) {
    console.error(e);
  }
}

export async function getBrands() {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const brands = await db.collection("products").distinct("brand");

    return JSON.parse(JSON.stringify(brands));
  } catch (e) {
    console.error(e);
  }
}

export async function getCart(id?: string) {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const cart = await db
      .collection("carts")
      .findOne({ _id: new ObjectId(id) });
    const productList = JSON.parse(JSON.stringify(cart)).products;

    let fetchProductsResult: ProductsCart[] = [];
    await Promise.all(
      productList.map(async (product: any) => {
        fetchProductsResult.push({
          item: await fetchProduct(product.id),
          qty: product.quantity,
          date: product.date,
        });
      })
    );

    /**
     * products : {items , qnty}
     * total: number
     */

    let total: number = 0;
    let totalQuantity: number = 0;
    fetchProductsResult.map((product) => {
      total += product.item.price * product.qty;
      totalQuantity += product.qty;
    });

    fetchProductsResult.sort(function (a: any, b: any): any {
      return b.date - a.date;
    });

    let result: {
      products: ProductsCart[];
      total: number;
      totalQuantity: number;
    } = { products: fetchProductsResult, total, totalQuantity };
    return result;
  } catch (e) {
    console.error(e);
  }
}
