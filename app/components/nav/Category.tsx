"use client";

import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  //THIS IS USED TO CHANGETHECLASS OF PRODUCTS DISPLAYED WHEN A CATEGORY IS CLICKED
  // IN ORDER TO FETCH PRODUCTS THAT BELONG TO THAT CATEGORY.

  const handleClick = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }
      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`fles  items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800
    transition cursor-pointer
    ${
      selected
        ? "border-b-slate-800 text-slate-800"
        : "border-transparent text-slate-500"
    } `}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
