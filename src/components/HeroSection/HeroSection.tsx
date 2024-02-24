import React from 'react'
import Image from 'next/image'
import heroImg from "@/images/heroImg.jpg"
export default function HeroSection() {
  return (
    <div className={"bg-hero relative flex-grow w-full min-h-[600px] rounded-3xl  flex justify-center items-center flex-col"}>      
    <h1 className='text-3xl lg:text-8xl  font-bold mb-5'>
    Majara Group
    </h1>
    <h6 className='text-xl lg:text-3xl'>
    Universe of luminance
    </h6>
    <button className='btn mt-11'>
    هيا نبدأ
    </button>
    </div>
  )
}
