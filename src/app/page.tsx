"use client";
import HeroSection from "@/components/HeroSection/HeroSectionHome";
import NewAboutMajara from "@/components/HeroSection/NewAboutMajara";
import LatestOfers from "@/components/HeroSection/LatestOfers";
import Podcast from "@/components/HeroSection/Podcast";
import Services from "@/components/HeroSection/Services";
import InfoAboutUs from "@/components/HeroSection/InfoAboutUs";
import { useEffect, useState } from "react";
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner";

export default function Home() {
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
      <HeroSection />
      <NewAboutMajara />
      <LatestOfers />
      <Podcast />
      <Services />
      <InfoAboutUs />
    </>
  );
}
