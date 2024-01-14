import { usePathname, useSearchParams } from "next/navigation";
import { camelCase, createUrl, transformStringLower } from "@/lib/utils";
import Link from "next/link";
export function CheckboxFilterItem({
  filterCategory,
  value,
}: {
  filterCategory: string;
  value: Document;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const sort = searchParams.get("sort");
  const caseMaterial = searchParams.getAll("caseMaterial");
  const dialColor = searchParams.getAll("dialColor");
  const bandColor = searchParams.getAll("bandColor");
  const brand = searchParams.getAll("brand");
  let newParams = new URLSearchParams(searchParams.toString());

  const { _id, count } = JSON.parse(JSON.stringify(value));
  let name = transformStringLower(_id);
  let checked: boolean = false;

  if (filterCategory && filterCategory === "caseMaterial" && name) {
    if (caseMaterial.length >= 1 && caseMaterial.includes(name)) {
      caseMaterial.splice(caseMaterial.indexOf(name), 1);
      checked = true; //simply set to true if the name exists in the caseMaterial as the if conditions above already stated
      newParams.delete("caseMaterial");
      caseMaterial.map((q) => newParams.append("caseMaterial", q));
    } else {
      newParams.append("caseMaterial", name);
    }
  } else if (filterCategory && filterCategory === "dialColor" && name) {
    if (dialColor.length >= 1 && dialColor.includes(name)) {
      dialColor.splice(dialColor.indexOf(name), 1);
      checked = true;
      newParams.delete("dialColor");
      dialColor.map((q) => newParams.append("dialColor", q));
    } else {
      newParams.append("dialColor", name);
    }
  } else if (filterCategory && filterCategory === "bandColor" && name) {
    if (bandColor.length >= 1 && bandColor.includes(name)) {
      bandColor.splice(bandColor.indexOf(name), 1);
      checked = true;
      newParams.delete("bandColor");
      bandColor.map((q) => newParams.append("bandColor", q));
    } else {
      newParams.append("bandColor", name);
    }
  } else if (filterCategory && filterCategory === "brand" && name) {
    if (brand.length >= 1 && brand.includes(name)) {
      brand.splice(brand.indexOf(name), 1);
      checked = true;
      newParams.delete("brand");
      brand.map((q) => newParams.append("brand", q));
    } else {
      newParams.append("brand", name);
    }
  }

  //pinalitan lang kita ng name, nagagagaganyan kana
  //paawat kana grabeh ka

  // const href = createUrl(
  //   pathname,
  //   new URLSearchParams({
  //     ...(query && { query }),
  //     ...(sort && { sort }),
  //     ...(caseMaterial &&
  //       caseMaterial.length >= 1 && {
  //         caseMaterial: caseMaterial.toString(),
  //       }),
  //     ...(dialColor && dialColor.length >= 1 && { dc: dialColor.toString() }),
  //     ...(bandColor && bandColor.length >= 1 && { bc: bandColor.toString() }),
  //   })
  // );

  // const checked = searchParams.getAll("caseMaterial").includes(name);

  const href = createUrl(pathname, newParams);

  return (
    <>
      <Link href={href}>
        <div className="checkbox-wrapper">
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox__input"
              checked={checked}
              readOnly
            />
            <span className="checkbox__label"></span>
            <p className="text-base text-black dark:text-white hover:text-gray-900">
              {_id}
            </p>
            <p className="text-sm text-black dark:text-white hover:text-gray-900 ml-auto ">{`(${count})`}</p>
          </label>
        </div>
      </Link>
    </>
  );
}

export default function CheckboxFilter({
  filterCategory,
  filterItems,
}: {
  filterCategory: string;
  filterItems: [];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  let newParams = new URLSearchParams(searchParams.toString());
  newParams.delete(camelCase(filterCategory));
  const href = createUrl(pathname, newParams);
  return (
    <>
      <div className="my-4">
        <div className="flex justify-between">
          {filterCategory}
          {searchParams.getAll(camelCase(filterCategory)).length > 0 ? (
            <Link className="mr-2 text-red-600" href={href}>
              Clear
            </Link>
          ) : null}
        </div>
        <div className="px-4">
          {filterItems &&
            filterItems.map((item, i) => (
              <CheckboxFilterItem
                key={i}
                filterCategory={camelCase(filterCategory)}
                value={item}
              />
            ))}
        </div>
      </div>
    </>
  );
}
