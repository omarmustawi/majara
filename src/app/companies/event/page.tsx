import React from "react";
import companiesImg from "../../../../public/images/companiesImg.png";
import HeroSecCompany from "@/components/HeroSection/HeroSecCompany";
import SubNavbarCompany from "@/components/Navbar/SubNavbarCompany";
import {event} from "../../../../public/data/company.json";

export default function page() {
  return (
    <section>
      <HeroSecCompany
        img={companiesImg}
        compName={"ايفينت"}
        description={
          "شريكك في رحلة النجاح شريكك في رحلة النجاح شريكك في رحلة النجاح"
        }
        color={"event"}
      />
      <SubNavbarCompany
        itemsTopbar={event.subtopbar}
        itemsSidbar={event.subnavbar}
      />
    </section>
  );
}
