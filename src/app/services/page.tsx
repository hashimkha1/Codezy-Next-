"use client";
import React, { useEffect, useState } from 'react';
import './ServicesSection.css';
import Hero from './herosection';
import ServicesSection from './services';
import Loader from '../../components/loader/loader'


const Services = () => {
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
        <Hero />
        <ServicesSection />
      </>
    )}
  </>
     
   
  );
};

export default Services;