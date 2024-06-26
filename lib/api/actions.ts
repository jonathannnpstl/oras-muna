import clientPromise from "../connection";
import { ObjectId } from "mongodb";

export async function addToCart(
  cartId: string | undefined,
  productID: string | undefined,
  quantity: number
) {
  console.log("Server: ", cartId);

  try {
    let exist: boolean = false;
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const cart = await db
      .collection("carts")
      .findOne({ _id: new ObjectId(cartId) });
    console.log("CART: ", cart);

    cart?.products.map((product: { id: string; quantity: number }) => {
      if (product.id && product.id === productID) {
        product.quantity += quantity;
        exist = true;
        return;
      }
    });

    if (!exist) {
      //if product is not yet in the cart
      cart?.products.unshift({
        id: productID,
        quantity: quantity,
        date: Date.now(),
      });
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

export async function addToWishlist(
  wishlistId: string | undefined,
  productID: string | undefined
) {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const wishlist = await db
      .collection("wishlists")
      .findOne({ _id: new ObjectId(wishlistId) });
    console.log("CART: ", wishlist);

    wishlist?.products.map((productId: string) => {
      if (productId && productId === productID) {
        return;
      }
    });

    //if product is not yet in the cart
    wishlist?.products.unshift({
      id: productID,
      date: Date.now(),
    });

    await db.collection("wishlists").updateOne(
      { _id: new ObjectId(wishlistId) },
      {
        $set: { products: wishlist?.products },
      }
    );
    return "Success";
  } catch (e) {
    console.error(e);
  }
}

export async function createCart() {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const data = {
      userId: "Auto generated to",
      status: false,
      products: [],
    };

    const document = await db.collection("carts").insertOne(data);
    return JSON.parse(JSON.stringify(document));
  } catch (e) {
    console.error(e);
  }
}
export async function createWishlist() {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const data = {
      userId: "Auto generated to",
      status: false,
      products: [],
    };

    const document = await db.collection("wishlists").insertOne(data);
    return JSON.parse(JSON.stringify(document));
  } catch (e) {
    console.error(e);
  }
}

export async function updateCart(
  cartId: string,
  productID: string,
  quantity: number
) {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const cart = await db
      .collection("carts")
      .findOne({ _id: new ObjectId(cartId) });

    cart?.products.map((product: { id: string; quantity: number }) => {
      if (product.id && product.id === productID) {
        product.quantity = quantity;
        return;
      }
    });

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

export async function removeFromCart(cartId: string, productId: string) {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const cart = await db
      .collection("carts")
      .findOne({ _id: new ObjectId(cartId) });

    cart?.products.map(
      (product: { id: string; quantity: number }, index: number) => {
        if (product && product.id === productId) {
          cart?.products.splice(index, 1);
          return;
        }
      }
    );

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
