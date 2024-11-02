"use client";
import React, { useContext } from 'react';
import './ServicesSection.css';
import Hero from './herosection';
import ServicesSection from './services';
import Loader from '../../components/loader/loader'

import { DescriContext } from '@/components/context/description';


const Services = () => {
  const {loading} = useContext(DescriContext)
  console.log('loader',loading)
  return (
   
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Hero  backgroundImage="/images/download.jpg" />
        <ServicesSection />
      </>
    )}
  </>
     
   
  );
};

export default Services;