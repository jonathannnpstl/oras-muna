import clientPromise from "../utils";

export async function fetchProducts(): Promise<any | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const movies = await db.collection("products").find({}).limit(10).toArray();

    return movies;
  } catch (e) {
    console.error(e);
  }
}
