"use client";
import React,{useState,useEffect} from "react";
import { CardHoverEffectDemo } from "../components/Services/Service";
import { ImagesSliderDemo } from "@/components/hero";
import { InfiniteMovingCardsDemo } from "@/components/card";
import {TimelineDemo} from "@/components/ Timeline";
import About from '../components/About/about'
import  Stats  from "../components/stats";
import Loader from '../components/loader/loader'

export default function Home() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  },2000)
  return () => clearTimeout(timer);
  },[])

  return (
    <>
      {loading ? (
      <Loader />
    ) : (
      <>
     
      <ImagesSliderDemo/>
      <About/>
      <CardHoverEffectDemo/>
      <TimelineDemo/>
      <Stats/>
      <InfiniteMovingCardsDemo />
    
      </>
      )
    }
    </>
  
  );
}
