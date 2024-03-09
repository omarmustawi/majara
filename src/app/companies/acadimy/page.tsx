import React from "react";
import companiesImg from "../../../../public/images/companiesImg.png";
import HeroSecCompany from "@/components/HeroSection/HeroSecCompany";

export default function page() {
  return (
    <section>
      <HeroSecCompany
        img={companiesImg}
        compName={"اكاديمي"}
        description={
          "شريكك في رحلة النجاح شريكك في رحلة النجاح شريكك في رحلة النجاح"
        }
        color={"acadimy"}
      />
    </section>
  );
}
