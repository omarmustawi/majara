import React from "react";
import companiesImg from "../../../../public/images/companiesImg.png";
import HeroSecCompany from "@/components/HeroSection/HeroSecCompany";
import SubNavbarCompany from "@/components/Navbar/SubNavbarCompany";
import {media} from "../../../../public/data/company.json";

export default function page() {
  return (
    <section>
      <HeroSecCompany
        img={companiesImg}
        compName={"ميديا"}
        description={
          "شريكك في رحلة النجاح شريكك في رحلة النجاح شريكك في رحلة النجاح"
        }
        color="media"
      />
      <SubNavbarCompany
        itemsTopbar={media.subtopbar}
        itemsSidbar={media.subnavbar}
      />
    </section>
  );
}
