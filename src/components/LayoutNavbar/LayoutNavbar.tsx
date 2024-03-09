"use client";
import { useIsOpenContact } from "@/contexts/IsOpenContact";
import { useIsOpenSidebarSecond } from "@/contexts/IsOpenSidebarSecond";
import { useTheme } from "@/contexts/ThemeContext";
import { useWindowSize } from "@/contexts/WindowWidthContext";
import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import Topbar from "../Navbar/Topbar";
import SidebarSmallScreen from "../Navbar/SidebarSmallScreen";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

export default function LayoutNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowSize();
  const { theme, toggleTheme } = useTheme();

  const { IsOpenSidebarSecond, setIsOpenSidebarSecond } =
    useIsOpenSidebarSecond();
  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();

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
    <div className={`w-full h-full bg-${theme}`}>
      <main className={`relative bg-inherit`}>
        <section className={`bg-inherit relative w-screen`}>
          {/* {width > 900 && <Sidebar />}
          {width < 900 && ( */}
          {width > 1024 && <Sidebar />}
          {width < 1024 && (
            <>
              <Topbar />
              <SidebarSmallScreen />
              {IsOpenContact && (
                <div
                  className="fixed top-0 right-0 left-0 h-screen bottom-0 bg-black/50 z-10"
                  onClick={() => setIsOpenContact(false)}
                ></div>
              )}
            </>
          )}
          <div
            dir="rtl"
            className={`body-theme-${theme} h-fit absolute ${
              IsOpenSidebarSecond && width > 1024 && "w-[calc(100vw-236px)]"
            } ${
              !IsOpenSidebarSecond && width > 1024 && "w-[calc(100vw-96px)]"
            } ${
              width > 1024 ? "top-0" : "top-[91px] w-full"
            } top-0 right-0 transition-all ease-in-out  duration-[1s] `}
          >
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
