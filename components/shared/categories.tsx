"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Завтрак" },
  { id: 3, name: "Пиццы" },
  { id: 4, name: "Пиццы" },
  { id: 5, name: "Пиццы" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryId === index + 1 &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          <button> {name}</button>
        </a>
      ))}
    </div>
  );
};
