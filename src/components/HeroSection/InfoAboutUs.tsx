import React from "react";
import infoAboutUsimg from "../../../public/images/infoAboutUs.jpg";
import Image from "next/image";

export default function InfoAboutUs() {
  return (
    <section className="grid sm:grid-cols-2 justify-center items-center gap-5  lg:mx-16 xl:mx-28 ">
      <div className="p-2 lg:p-10 h-full w-full flex justify-center   ">
        <Image
          className="h-fit w-full max-w-[400px] md:max-w-none rounded-3xl"
          src={infoAboutUsimg}
          alt={"info-about-majara"}
          width={500}
          height={500}
        />
      </div>
      <div className="text-lg md:text-2xl my-auto p-5 md:p-0">
        <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold">معلومات عنا ...</h1>
        <p className="my-3 sm:my-8 xl:my-16">
          نحن فريق CodeCrafters، مجموعة من المبتكرين والمطورين نعمل على تقديم
          حلول برمجية مبتكرة وفعالة. تجمعنا شغف الابتكار والتقنية لنلبي تطلعات
          عملائنا ونحقق معاهم أهدافهم الرقمية.
        </p>
        <p className="my-3 sm:my-8 xl:my-16">
          بدأت رحلتنا في عالم التكنولوجيا من حضارة العراق القديمة، حيث نستلهم
          قوتنا وإبداعنا من تراث عظيم. نعمل بإخلاص واجتهاد لتحويل أفكار عملائنا
          إلى حقيقة رقمية ملموسة.
        </p>
        <p className="my-3 sm:my-8 xl:my-16">
          نحن نهدف إلى تقديم حلول مبتكرة تساهم في تطوير المجتمع ودفع عجلة التقدم
          التكنولوجي. انضموا إلينا في رحلتنا نحو مستقبل تقني مشرق.
        </p>
        <p className="my-3 sm:my-8 xl:my-16">قائد الفريق</p>
      </div>
    </section>
  );
}
