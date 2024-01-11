"use server";
import clientPromise from "../connection";
import { ObjectId } from "mongodb";
import { ProductsCart } from "../definition";
import { transformStringUpper } from "../utils";
import { filterFields } from "../constants";

export async function fetchProducts({
  query,
  sortKey,
  reverse,
  brand,
  page,
  caseMaterial,
  bandColor,
  dialColor,
}: {
  query?: string;
  sortKey?: string | undefined;
  reverse?: boolean;
  brand?: string[] | undefined;
  page?: number | undefined;
  caseMaterial?: string[] | undefined;
  bandColor?: string[] | undefined;
  dialColor?: string[] | undefined;
}): Promise<any | undefined> {
  try {
    let skips = page ? (page - 1) * 9 : 0;
    let products;
    const client = await clientPromise;
    const db = client.db("oras-muna-db");
    const regex = new RegExp("\\b" + query + "[a-zA-Z]*\\b", "i");
    let count: number = 0;

    //this to make sure were passing an array to the query, as it requires
    if (caseMaterial && caseMaterial?.constructor != Array) {
      caseMaterial = Array(1).fill(caseMaterial);
    }
    if (bandColor && bandColor?.constructor != Array) {
      bandColor = Array(1).fill(bandColor);
    }
    if (dialColor && dialColor?.constructor != Array) {
      dialColor = Array(1).fill(dialColor);
    }
    if (brand && brand?.constructor != Array) {
      brand = Array(1).fill(brand);
    }

    let queryObj: any = {};
    if (query) {
      queryObj.name = { $regex: regex };
    }
    if (brand) {
      queryObj.brand = queryObj.brand = {
        $in: brand.map((obj) => transformStringUpper(obj)),
      };
    }
    if (caseMaterial) {
      queryObj.case_material = {
        $in: caseMaterial.map((obj) => transformStringUpper(obj)),
      };
    }
    if (bandColor) {
      queryObj.band_color = {
        $in: bandColor.map((obj) => transformStringUpper(obj)),
      };
    }
    if (dialColor) {
      queryObj.dial_color = {
        $in: dialColor.map((obj) => transformStringUpper(obj)),
      };
    }

    products = db.collection("products").find(queryObj);
    count = await db.collection("products").countDocuments(queryObj);

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
      count: count,
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

export async function getFilters() {
  try {
    const client = await clientPromise;
    const db = client.db("oras-muna-db");

    const filterList = Promise.all(
      filterFields.map(async (filter) => {
        const data = await db
          .collection("products")
          .aggregate([
            {
              $group: {
                _id: `$${filter}`,
                count: {
                  $sum: 1,
                },
              },
            },
            {
              $sort: {
                _id: 1,
              },
            },
          ])
          .toArray();

        return {
          filterType: transformStringUpper(filter),
          filterItems: JSON.parse(JSON.stringify(data)),
        };
      })
    );

    return filterList;
  } catch (e) {
    console.log(e);
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
    //sort by date of addtocart
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

export async function getSimilarProducts(id: string) {}
