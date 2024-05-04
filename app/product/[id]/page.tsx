import { id } from "@/type";
import { a } from "@/a";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
export default function page({ params }: id) {
  const find = a.find((item) => item.id === Number(params.id));
  return (
    <div
      className="dark:bg-night  bg-white  md:max-w-3xl max-w-xs mt-8
  lg:max-w-7xl mx-auto p-5 lg:p-8 rounded-md flex flex-col gap-4"
    >
      <div className="lg:grid flex flex-col gap-4 lg:gap-x-8 grid-cols-11">
        <div className=" col-span-4 rounded-md">
          <Image
            priority
            className="object-cover h-auto rounded-md"
            width={900}
            height={100}
            quality={80}
            src={find?.image || ""}
            alt="گوشی موبایل"
          />
        </div>
        <div className="divide-y-[2px] shadow-md dark:divide-white flex flex-col gap-y-6 divide-backgray p-3 col-span-4">
          <h1 className="dark:text-white text-md  lg:text-2xl font-bold text-verydark text-right">
            {find?.name}
          </h1>
          <div>
            <div className="flex py-3 dark:text-white text-verydark flex-row-reverse gap-x-1">
              <span>:قیمت</span>
              <span>{find?.price}</span>
              <span>تومان</span>
            </div>

            <div className="flex justify-end gap-2 items-center">
              <span>گارانتی پس از فروش</span>
              <FcApproval className="text-2xl"></FcApproval>
            </div>
          </div>

          <div>
            <ol className="pl-6 flex flex-col gap-y-3 text-right py-2">
              {find?.description.map((item) => {
                return (
                  <li
                    key={item}
                    className="flex text-verydark dark:text-white gap-2 justify-end"
                  >
                    <span>{item}</span>
                    <span>●</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="shadow-lg  col-span-3">1</div>
      </div>
    </div>
  );
}
