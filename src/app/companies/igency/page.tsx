import React from "react";
import companiesImg from "../../../../public/images/companiesImg.png";
import HeroSecCompany from "@/components/HeroSection/HeroSecCompany";
import SubNavbarCompany from "@/components/Navbar/SubNavbarCompany";
import { igency } from "../../../../public/data/company.json";
import RowAboutUs from "@/components/AboutUsComponents/RowAboutUs";
import { data } from "../../../../public/data/aboutusData.json";
export default function page() {
  return (
    <section>
      <HeroSecCompany
        img={companiesImg}
        compName={"آيجنسي"}
        description={
          "شريكك في رحلة النجاح شريكك في رحلة النجاح شريكك في رحلة النجاح"
        }
        color={"igency"}
      />
      <SubNavbarCompany
        itemsTopbar={igency.subtopbar}
        itemsSidbar={igency.subnavbar}
      />
      {/* start section about us maybe I delete this later  */}
      <div className="p-4">
        <RowAboutUs
          img={data[0].img}
          title={data[0].title}
          description={data[0].description}
          services={data[0].services}
        />
      </div>
      {/* end section about us maybe I delete this later  */}
    </section>
  );
}
