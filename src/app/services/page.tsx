"use client";
import React, { useState, useEffect, useContext } from 'react';
import './ServicesSection.css';
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { motion, stagger, useAnimate } from "framer-motion";
import { Box, Grid, Typography, Card, CardContent,Button } from '@mui/material';
import { LaptopMac, PhoneAndroid, TrendingUp, Cloud, Security, Storage, DesignServices, ShoppingCart, DashboardCustomize } from '@mui/icons-material';
import { styled } from '@mui/system';
import Head from './head';
import Hero from './herosection';
import { DescriContext } from '@/components/context/description';

const RotatingIcon = styled(Box)({
  display: 'inline-block',
  transition: 'transform 1s ease',
  '&:hover': {
    transform: 'rotate(-360deg)',
    color:'#ffa500',
    cursor:'pointer'
  },
});
const iconMapping = {
  TrendingUp: <TrendingUp style={{ fontSize: 60 }} />,
  LaptopMac: <LaptopMac style={{ fontSize: 60 }} />,
  PhoneAndroid: <PhoneAndroid style={{ fontSize: 60 }} />,
  Cloud: <Cloud style={{ fontSize: 60 }} />,
  Security: <Security style={{ fontSize: 60 }} />,
  Storage: <Storage style={{ fontSize: 60 }} />,
  DesignServices: <DesignServices style={{ fontSize: 60 }} />,
  ShoppingCart: <ShoppingCart style={{ fontSize: 60 }} />,
  DashboardCustomize: <DashboardCustomize style={{ fontSize: 60 }} />,
};
// const services = [
//   {
//     icon: <TrendingUp style={{ fontSize: 60 }} />,
//     title: "Custom ERP Development",
//     description: "We have vast experience in designing multiple ERP products including CRM, Delivery Management System, Warehouse Management System, Financials, Project Management, Payroll, Inventory, ERP Integration with eCommerce Store.",
//   },
//   {
//     icon: <LaptopMac style={{ fontSize: 60 }} />,
//     title: "Web Development and Designing",
//     description: "From Frontend to Backend to even Full-stack development, we fast-track your project delivery to create an experience beyond your expectations.",
//   },
//   {
//     icon: <PhoneAndroid style={{ fontSize: 60 }} />,
//     title: "Mobile Application",
//     description: "Our application development team is specialized in delivering Native iOS, Native Android and Cross-Platform Applications. We are using React Native, PhoneGap, Appcelerator, and Flutter to adopt a friendly interface to enhance the UI/UX.",
//   },
//   {
//     icon: <Cloud style={{ fontSize: 60 }} />,
//     title: "Cloud Solutions",
//     description: "We offer scalable and secure cloud solutions to streamline your operations and enhance your IT infrastructure.",
//   },
//   {
//     icon: <Security style={{ fontSize: 60 }} />,
//     title: "Cyber Security",
//     description: "Our cyber security services ensure your business stays protected from online threats and data breaches.",
//   },
//   {
//     icon: <Storage style={{ fontSize: 60 }} />,
//     title: "Data Management",
//     description: "We provide top-notch data management services, ensuring your business data is structured and accessible.",
//   },
//   // Newly added services
//   {
//     icon: <DesignServices style={{ fontSize: 60 }} />,
//     title: "UI/UX Design",
//     description: "Our UI/UX design team ensures that your application provides an intuitive and engaging user experience, making your product easy and enjoyable to use.",
//   },
//   {
//     icon: <ShoppingCart style={{ fontSize: 60 }} />,
//     title: "E-commerce Solutions",
//     description: "We provide end-to-end e-commerce solutions, from storefront design to secure payment integration, ensuring your online store is user-friendly and scalable.",
//   },
//   {
//     icon: <DashboardCustomize style={{ fontSize: 60 }} />,
//     title: "CMS Management",
//     description: "We specialize in CMS solutions to help manage your website's content efficiently, whether you're using WordPress, Drupal, or custom-built platforms.",
//   },
// ];
const ServicesSection = () => {
  const [expandedCard,setExpandedCard] = useState(null)
  const {services} = useContext(DescriContext)
  const toggleReadMore = (index)=>{
    setExpandedCard(expandedCard == index ? null : index)
  }
  

  return (
    <>
    <Hero/>
      <Box sx={{ p: 4, textAlign: 'center' }}>
      {/* Section title */}
      <Typography variant="h3" sx={{ mb:6,mt:4}} gutterBottom>
        What we are offering
      </Typography>

      {/* Service cards */}
      <Grid 
          container 
          rowSpacing={2}   // Vertical spacing between rows
          columnSpacing={0}
          justifyContent="center" 
          alignItems="center" 
          style={{ minHeight: '100vh' }}  // Full viewport height for vertical centering
        >
      {services.map((service, index) => {
        const isExpanded = expandedCard === index;
        const truncatedDescription = `${service.description.substring(0, 100)}...`;

        return (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index} 
            style={{ display: 'flex', justifyContent: 'center' }}  // Center each card horizontally
          >
        <Card
          sx={{
            height: isExpanded ? 'auto' : '340px',  // Increase height
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Constant shadow
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center content inside the card
          }}
        >
          <CardContent>
            <RotatingIcon sx={{ mb: 7, mt: 4 }}>
              {iconMapping[service.iconName]} {/* Dynamically rendering the icon */}
            </RotatingIcon>
            <Typography variant="h5" sx={{ mb: 2 }} gutterBottom>
              <Head title={service.title} />
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18, fontFamily: 'revert' }} color="textSecondary">
              {isExpanded ? service.description : service.description.length > 200 ? truncatedDescription : service.description}
            </Typography>
            {service.description.length > 200 && (
              <button
                className="px-3 py-1 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                onClick={() => toggleReadMore(index)}
                style={{ marginTop: 4 }}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  })}
</Grid>
    </Box>
    </>
  );
};

export default ServicesSection;