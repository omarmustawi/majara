import { useTheme } from '@/contexts/ThemeContext';
import React from 'react'


const newAboutMajaraData = [
    {
      title: "بناء العلامة التجارية",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },
    {
      title: "تسويق",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },
    {
      title: "بناء العلامة التجارية",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },
    {
      title: "تسويق",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },
    {
      title: "بناء العلامة التجارية",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },
    {
      title: "تسويق",
      para: "في مجرة حيث تنمو كل يوم اكثر واكثر لترتقي بعلامتك  التجارية  ",
    },

  ];

export default function Services() {
  const { theme, toggleTheme } = useTheme();


  return (
    <section className=" p-3 my-20 xl:mx-20">
      <h1 className="title "> خــدمــاتــنـــــــــا ... </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-center   gap-7">
        {newAboutMajaraData.map((ele, id) => (
          <div key={id} className={`theme-${theme} rounded-3xl `}>
            <h1 className="text-xl font-medium px-4 py-4">{ele.title}</h1>
            <p className="px-4 pb-4 "> {ele.para}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
