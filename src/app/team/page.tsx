"use client";
import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/loader';
import './AboutUs.css'; 
import Hero from './../services/herosection';
import About from "../../components/About/about";
import Stats from "../../components/stats";
import About1 from './about';
import ScrollButton from "../../components/ScrollButton";
import { Team } from './team';
import ContactUs from './contactUs';


const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer); 
  }, []);

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
