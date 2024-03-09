"use client"
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import React from "react";

type serviceProp = {
  subtitle: string;
  para: string;
};
export default function RowAboutUs({
  img,
  title,
  description,
  services,
}: {
  img: string;
  title: string;
  description: string;
  services: serviceProp[];
}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="flex flex-col md:flex-row gap-4 my-3 lg:max-h-[700px]"
    >
      <Image
        src={img}
        alt="majara"
        className="w-full"
        width={300}
        height={300}
      />
      <div className="my-auto">
        <h2 className="font-extrabold text-3xl">{title}</h2>
        <p className="text-xl font-medium my-6">{description}</p>
        <div>
          {services.map((service, index) => (
            <div key={index} className={`bg-${theme} p-3 rounded-2xl my-3`}>
              <h3 className="font-semibold text-xl">{service.subtitle}</h3>
              <p>{service.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
