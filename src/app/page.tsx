"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import HeroParallaxDemo from "./home/page";
import { CardHoverEffectDemo } from "../components/Services/Service";
import { ImagesSliderDemo } from "@/components/hero";
import { InfiniteMovingCardsDemo } from "@/components/card";
import {TimelineDemo} from "@/components/ Timeline";
import About from '../components/About/about'
import { GlowingStarsBackgroundCardPreview } from "@/components/new";
import  Stats  from "../components/stats";
export default function Home() {
  return (
    <>
    {/* <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Where Ideas Become Code
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      we believe in building lasting partnerships by delivering projects on time and beyond expectations. We're excited to bring our technical expertise and passion for software development to your project and make a meaningful impact.
      </p>
    </WavyBackground> */}
    
    <ImagesSliderDemo/>
    <About/>
    <CardHoverEffectDemo/>
    <TimelineDemo/>
    <Stats/>
    <InfiniteMovingCardsDemo />
   
    
    {/* <div style={{display:"flex",flexDirection:"row"}}>
    <GlowingStarsBackgroundCardPreview/>
    <GlowingStarsBackgroundCardPreview/>
    <GlowingStarsBackgroundCardPreview/>
    </div> */}
   
    
    {/* <HeroParallaxDemo/> */}
    </>
  );
}
