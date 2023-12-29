import clientPromise from "../connection";
import { SortFilterItem } from "../constants";
import { ObjectId } from "mongodb";

export async function fetchProducts({
  query,
  sortKey,
  reverse,
}: {
  query?: string;
  sortKey?: string | undefined;
  reverse?: boolean;
}): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const regex = new RegExp("\\b" + query + "[a-zA-Z]*\\b", "i");

    const products = db
      .collection("products")
      .find({ name: { $regex: regex } })
      .limit(10);

    if (sortKey === "price") {
      products.sort({ price: reverse ? -1 : 1 });
    } else if (sortKey === "popularity") {
      products.sort({ popularity: reverse ? -1 : 1 });
    } else if (sortKey === "rating") {
      products.sort({ rating: reverse ? -1 : 1 });
    } else {
      products.sort({ name: reverse ? -1 : 1 });
    }
    return JSON.parse(JSON.stringify(await products.toArray()));
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

export async function fetchBrandProducts({
  brand,
  query,
}: {
  brand?: string;
  query?: string;
}): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const regex = new RegExp("\\b" + query + "[a-zA-Z]*\\b", "i");

    const products = await db
      .collection("products")
      .find({ $and: [{ brand: brand }, { name: { $regex: regex } }] })
      .limit(10)
      .toArray();

    return JSON.parse(JSON.stringify(products));
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
