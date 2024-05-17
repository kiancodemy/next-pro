import React from "react";

export default function Process({ numbers }: { numbers: number }) {
  const items = ["ورود", "آدرس", "ثبت سفارش"];
  return (
    <div>
      <div className="flex py-3  items-center text-sm  lg:gap-x-8 lg:text-lg justify-between lg:justify-center">
        {items.map((item: string, index: number) => (
          <span
            className={` font-bold ${
              index + 1 <= numbers
                ? "text-maingreen dark:text-gray-400"
                : "text-gray-300 dark:text-white"
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
