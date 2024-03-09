"use client";
import HeroSectionAboutUS from "@/components/HeroSection/HeroSectionAboutUS";
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner";
import React, { useEffect, useState } from "react";
import { data } from "../../../public/data/aboutusData.json";
import CustomsOpinions from "@/components/AboutUsComponents/CustomsOpinions";
import RowAboutUs from "@/components/AboutUsComponents/RowAboutUs";
export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window) {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <>
      <HeroSectionAboutUS />
      <div className="p-4">
        {data.map((row, index) => (
          <RowAboutUs
            key={index}
            img={row.img}
            title={row.title}
            description={row.description}
            services={row.services}
          />
        ))}
      </div>
      <CustomsOpinions />
    </>
  );
}
