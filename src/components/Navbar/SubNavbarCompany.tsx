"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import useScrollY from "@/functions/functions";
import React, { useState } from "react";
import { useWindowSize } from "@/contexts/WindowWidthContext";
import { useTheme } from "@/contexts/ThemeContext";
type SubNavbarData = {
  [key: string]: string[];
};
export default function SubNavbarCompany({
  itemsTopbar,
  itemsSidbar,
}: {
  itemsTopbar: string[];
  itemsSidbar: SubNavbarData;
}) {
  const [clickedItem, setclickedItem] = useState(itemsTopbar[0]);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const { width } = useWindowSize();
  const { theme, toggleTheme } = useTheme();
  // const isScrollFixed = useScrollFixedBar(528);
  const posY = useScrollY();

  return (
    <>
      <div className={`grid gap-2 grid-col-x-1fr-x grid-row-x-1fr py-3 `}>
        {/* start subtopbar */}
        <div
          className={`flex justify-around items-center row-start-1 row-end-2 sticky top-[91px]  lg:top-0 transition-all duration-1000 ease-in-out  md:col-start-1 md:col-end-4 z-10 `}
        >
          {width < 768 && (
            <button
              disabled={currentSection === 0 ? true : false}
              onClick={() => {
                setCurrentSection(currentSection - 1);
                setclickedItem(itemsTopbar[currentSection - 1]);
              }}
              className={`rounded-full p-3 shadow-md z-10 bg-${theme} ${
                currentSection === 0 ? `opacity-40` : `hover:bg-[#c2e7ff] hover:text-dark`
              } `}
            >
              <FaArrowRight size={15} />
            </button>
          )}

          <div
            className={`grid md:grid-cols-4  grid-rows-1 theme-${theme} rounded-3xl w-fit md:w-full  ${
              posY > 528
                ? "reducing-size-navbar shadow-md "
                : "expainsion-size-navbar"
            } `}
          >
            {width > 768 ? (
              itemsTopbar.map((item, index) => (
                <span
                  key={index}
                  onClick={() => {
                    setclickedItem(item);
                    setCurrentSection(index);
                  }}
                  className=" hover:bg-gray-200 hover:text-dark h-full w-fit p-3 rounded-full cursor-pointer mx-auto "
                >
                  {" "}
                  {item}{" "}
                </span>
              ))
            ) : (
              <span className="hover:bg-gray-200 hover:text-dark mx-auto text-center rounded-3xl min-w-[280px] w-full shadow-md p-3">
                {itemsTopbar[currentSection]}
              </span>
            )}
          </div>

          {width < 768 && (
            <button
              disabled={currentSection === itemsTopbar.length -1 ? true : false}
              onClick={() => {
                setCurrentSection(currentSection + 1);
                setclickedItem(itemsTopbar[currentSection + 1]);
              }}
              className={`rounded-full p-3 shadow-md z-10 bg-${theme} ${
                currentSection === itemsTopbar.length - 1
                  ? `opacity-40`
                  : `hover:bg-[#c2e7ff] hover:text-dark`
              } `}
            >
              <FaArrowLeft size={15} />
            </button>
          )}
        </div>
        {/* end subtopbar */}

        {/* start subsidebar  */}
        <div className={`col-start-1 col-end-2  row-start-2 row-end-3 mx-3   `}>
          <div
            className={`sticky top-[139px] lg:top-[48px] translate-y-0 lg:translate-y-10 xl:top-0`}
          >
            <h3 className="font-bold text-xl"> في: {clickedItem} </h3>
            <div className="flex flex-col gap-3">
              {itemsSidbar[clickedItem].map((item, index) => (
                <span
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-3xl hover:shadow-md"
                >
                  {" "}
                  {item}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* end subsidebar  */}

        {/* start middle section */}
        <div
          className={`h-[160vh] w-full row-start-3 row-end-4 md:col-start-2 md:col-end-4 xl:col-end-3 md:row-start-2 md:row-end-4 theme-${theme} rounded-lg text-8xl flex justify-center items-center `}
        >
          محتوى القسم
        </div>
        {/* end middle section */}
      </div>
      {/* start nav buttons sections */}
      <div className="grid gap-5 grid-cols-2 grid-rows-1 m-5">
        <button
          onClick={() => {
            setCurrentSection(currentSection - 1);
            setclickedItem(itemsTopbar[currentSection - 1]);
          }}
          disabled={currentSection === 0 ? true : false}
          className={`col-start-1 col-end-2  ${
            currentSection === 0
              ? `theme-${theme} opacity-50 `
              : `theme-${theme} cursor-pointer hover:bg-[#c2e7ff]  hover:text-dark`
          }   rounded-2xl p-5 shadow-md`}
        >
          <span>
            <FaArrowRight size={15} className="inline-block" /> السابق
          </span>
          <p className="font-semibold text-xl">
            {itemsTopbar[currentSection - 1]}
          </p>
        </button>
        <button
          disabled={currentSection === itemsTopbar.length - 1 ? true : false}
          onClick={() => {
            setCurrentSection(currentSection + 1);
            setclickedItem(itemsTopbar[currentSection + 1]);
          }}
          className={`col-start-2 col-end-3 ${
            currentSection === itemsTopbar.length - 1
              ? `theme-${theme} opacity-50 `
              : `theme-${theme} cursor-pointer hover:bg-[#c2e7ff]  hover:text-dark`
          }   rounded-2xl p-5 shadow-md`}
        >
          <span>
            التالي <FaArrowLeft size={15} className="inline-block" />
          </span>
          <p className="font-semibold text-xl">
            {itemsTopbar[currentSection + 1]}
          </p>
        </button>
      </div>
      {/* start nav buttons sections */}
    </>
  );
}
