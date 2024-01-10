export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: undefined | "popularity" | "rating" | "price";
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: undefined,
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Popularity",
    slug: "popularity",
    sortKey: "popularity",
    reverse: true,
  },
  {
    title: "Rating",
    slug: "rating",
    sortKey: "rating",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "price",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "price",
    reverse: true,
  },
];

export const filterFields: string[] = [
  "brand",
  "case_material",
  "band_color",
  "dial_color",
];
