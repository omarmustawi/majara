import React from "react";
import { customsOpinions } from "../../../public/data/aboutusData.json";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
interface OpinionProps {
  img: string;
  name: string;
  opinion: string;
}

export default function CustomsOpinions() {
  const { theme, toggleTheme } = useTheme();

  const chunkedArray = (array: OpinionProps[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedData = chunkedArray(customsOpinions, 4);
  return (
    <section className="p-5">
      <h1 className="text-3xl my-6"> تجربة عن العملاء... </h1>
      {chunkedData?.map((fourElements, index) => (
        <div key={index} className="grid gap-7 my-7 lg:grid-cols-2 lg:grid-rows-2 relative">
          {fourElements?.map((element: OpinionProps, id: number) => (
            <div
              key={id}
              className={`p-3 col-start-${id + 1} col-end-${
                id + 2
              } bg-${theme} rounded-2xl flex flex-col sm:flex-row gap-4`}
            >
              <div>
                <h3 className="font-semibold text-blue-500">
                  {" "}
                  {element.name}{" "}
                </h3>
                <p> {element.opinion} </p>
              </div>
              <Image src={element.img} className="w-fit h-fit m-auto rounded-full border-2 border-[#1CD2E1] " alt="" width={100}height={100} />
            </div>
          ))}
          <span className="h-full w-[2px] left-1/2 -translate-x-1/2 absolute bg-[#FD8E48] hidden lg:block "></span>
          <span className="w-full h-[2px] top-1/2 -translate-y-1/2 absolute bg-[#FD8E48] hidden lg:block "></span>
          <span className="w-[8px] h-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute bg-[#FD8E48] hidden lg:block rotate-45"></span>
        </div>
      ))}
    </section>
  );
}
