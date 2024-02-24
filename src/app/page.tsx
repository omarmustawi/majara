/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Topbar from "@/components/Navbar/Topbar";
import Sidebar from "@/components/Navbar/Sidebar";
import SidebarSmallScreen from "@/components/Navbar/SidebarSmallScreen";
import { useWindowSize } from "@/contexts/WindowWidthContext";
import { useEffect, useState } from "react";
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner";
import { useTheme } from "@/contexts/ThemeContext";
import HeroSection from "@/components/HeroSection/HeroSection";
import { useIsOpenSidebarSecond } from "@/contexts/IsOpenSidebarSecond";
import { useIsOpenContact } from "@/contexts/IsOpenContact";
import NewAboutMajara from "@/components/HeroSection/NewAboutMajara";
import LatestOfers from "@/components/HeroSection/LatestOfers";
import Podcast from "@/components/HeroSection/Podcast";
import Services from "@/components/HeroSection/Services";
import InfoAboutUs from "@/components/HeroSection/InfoAboutUs";

export default function Home() {
  const { width } = useWindowSize();
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  // const { theme, toggleTheme } = useTheme();
  const { IsOpenSidebarSecond, setIsOpenSidebarSecond } =
    useIsOpenSidebarSecond();
  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();
  useEffect(() => {
    if (window) {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <div className="w-full h-full ">
      <main className={`relative bg-inherit `}>
        <section className={`bg-inherit relative w-screen`}>
          {width > 900 && <Sidebar />}
          {width < 900 && (
            <>
              <Topbar />
              <SidebarSmallScreen />
              {IsOpenContact && (
                <div
                  className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-10"
                  onClick={() => setIsOpenContact(false)}
                ></div>
              )}
            </>
          )}
          <div
            dir="rtl"
            className={` body-theme-${theme} h-fit  absolute
            ${IsOpenSidebarSecond && width > 900 && "w-[calc(100vw-278px)]"}
            ${!IsOpenSidebarSecond && width > 900 && "w-[calc(100vw-78px)]"}
             ${
               width > 900 ? "top-0" : "top-[91px]"
             } top-0 right-0 transition-all ease-in-out  duration-[1s] `}
          >
            <HeroSection />
            <NewAboutMajara />
            <LatestOfers />
            <Podcast />
            <Services />
            <InfoAboutUs />
          </div>
          <div className="h-96 w-10">1</div>
        </section>
      </main>
    </div>
  );
}
