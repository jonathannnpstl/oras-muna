import clientPromise from "../connection";
import { ObjectId } from "mongodb";

export async function addToCart(
  cartId: string,
  productID: string | undefined,
  quantity: number
) {
  try {
    let exist: boolean = false;
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const cart = await db
      .collection("carts")
      .findOne({ _id: new ObjectId(cartId) });
    console.log(cart);

    cart?.products.map((product: { id: string; quantity: number }) => {
      if (product.id && product.id === productID) {
        product.quantity += quantity;
        exist = true;
        return;
      }
    });

    if (!exist) {
      cart?.products.push({ id: productID, quantity: quantity });
    }

    await db.collection("carts").updateOne(
      { _id: new ObjectId(cartId) },
      {
        $set: { products: cart?.products },
      }
    );
    return "Success";
  } catch (e) {
    console.error(e);
  }
}
