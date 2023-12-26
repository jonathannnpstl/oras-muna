import clientPromise from "../connection";

export async function fetchProducts({
  query,
}: {
  query?: string;
}): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const regex = new RegExp("\\b" + query + "[a-zA-Z]*\\b", "i");

    const products = await db
      .collection("products")
      .find({ name: { $regex: regex } })
      .limit(10)
      .toArray();

    return JSON.parse(JSON.stringify(products));
  } catch (e) {
    console.error(e);
  }
}

export async function fetchBrandProducts({
  brand,
}: {
  brand?: string;
}): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const products = await db
      .collection("products")
      .find({ brand: brand })
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
