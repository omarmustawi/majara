import React from "react";
import companiesImg from "../../../../public/images/companiesImg.png";
import HeroSecCompany from "@/components/HeroSection/HeroSecCompany";
import SubNavbarCompany from "@/components/Navbar/SubNavbarCompany";
import {temkeen} from "../../../../public/data/company.json";

export default function page() {
  return (
    <section>
      <HeroSecCompany
        img={companiesImg}
        compName={"تمكين"}
        description={
          "شريكك في رحلة النجاح شريكك في رحلة النجاح شريكك في رحلة النجاح"
        }
        color="temkeen"
      />
      <SubNavbarCompany
        itemsTopbar={temkeen.subtopbar}
        itemsSidbar={temkeen.subnavbar}
      />
    </section>
  );
}
