import React from 'react';
import Image from "next/image";
import newAboutMajara1 from "@/images/newAboutMajara1.jpg";
import { useTheme } from '@/contexts/ThemeContext';
const newAboutMajaraData = [
  {
    img: newAboutMajara1,
    title: "حلول برمجية ترتقي باعمالك",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "حلول برمجية ترتقي باعمالك",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
  {
    img: newAboutMajara1,
    title: "بناء جمهور مستهدف",
    para: "بناء جمهور مستهدف بناء جمهور مستهدف بناء جمهور مستهدف ",
  },
];


export default function Podcast() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="w-full p-3 my-20">
    <h1 className="title">جديد بودكاست مجرة  </h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center   gap-5">
      {newAboutMajaraData.map((ele, id) => (
        <div key={id} className={`theme-${theme} rounded-3xl shadow-md max-w-[400px] lg:max-w-none`}>
          <Image className="rounded-3xl" src={ele.img} alt="majra" width={2000} height={2000} />
          <h1 className="text-xl font-medium px-4 py-4">{ele.title}</h1>
          <p className="px-4 pb-4 "> {ele.para}</p>
        </div>
      ))}
    </div>
  </section>
  )
}
