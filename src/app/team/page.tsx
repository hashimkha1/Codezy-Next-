"use client";
import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../components/loader/loader';
import './AboutUs.css'; 
import Hero from './../services/herosection';
import About from "../../components/About/about";
import Stats from "../../components/stats";
import About1 from './about';
import ScrollButton from "../../components/ScrollButton";
import { Team } from './team';
import ContactUs from './contactUs';
import { DescriContext } from '@/components/context/description';


const AboutUs = () => {
const {loading} = useContext(DescriContext)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero backgroundImage="/images/team.jpg" />
          <Stats props={{ bg: '#f5f5f5', color: 'black' }} />
          <About />
          <About1 />
          <Team/>
          <ContactUs/>
          <ScrollButton/>
        </>
      )}
    </>
  );
};

export default AboutUs;
