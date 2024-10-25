"use client";
import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/loader';
import './AboutUs.css'; 
import Hero from './../services/herosection';
import About from "../../components/About/about";
import Stats from "../../components/stats";
import { Box, Typography, Grid } from '@mui/material';


const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

   return(
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
         <Hero />
         <About />
         <Box sx={{ backgroundColor:'#f5f5f5;'}}>
  <Box sx={{ 
        padding: 4,
        marginLeft:8,
        marginRight:6
        }}>
    <Grid container spacing={3}>
      <Grid item
         xs={12} 
         sm={4}
         sx={{
          height:250,
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
        Our Mission
        Our mission is to provide innovative services of the highest order to our valued clients throughout the world. We believe in continuous learning and improvement so that people living in every part of the world can cherish from our technical skills
        </Typography>
      </Grid>
      <Grid 
        item
        xs={12}
        sm={4}
        sx={{
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
        >
        <Typography variant="h5" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1">
        Our Vision is to become the world’s leading software house that can be considered as IT partners by other huge multi-national corporations.
        </Typography>
      </Grid>
      <Grid
       item
        xs={12}
         sm={4}
         sx={{
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }} 
         >
        <Typography variant="h5" gutterBottom>
          Our Plan
        </Typography>
        <Typography variant="body1">
          To create unique products by building a unique market pool.
        </Typography>
      </Grid>
    </Grid>
  </Box>
 
  {/* Quality, Approach, and Innovation Section */}
  <Box sx={{ padding: 4,marginLeft:8,marginRight:6 }}>
    <Grid container spacing={3}>
      <Grid 
      item 
      xs={12}
       sm={4}
        sx={{
          height:250,
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
       >
        <Typography variant="h5" gutterBottom>
          Quality
        </Typography>
        <Typography variant="body1">
        Our Software Quality Assurance & Testing Practice makes sure that quality is maintained in today’s rapid software development life-cycle methods through innovative test automation and enables a full complete quality assurance testing services and source code review services.
        </Typography>
      </Grid>
      <Grid 
      item
       xs={12} 
       sm={4}
       sx={{
        borderRadius: '8px', 
        transition: 'transform 0.3s, box-shadow 0.3s', 
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        },
        padding: 2,
        backgroundColor: 'white',
      }}
       
       >
        <Typography variant="h5" gutterBottom>
          Approach
        </Typography>
        <Typography variant="body1">
        Our approach focuses in a unique way towards our business model, to combine IT innovations with its implementations, while leveraging an organization’s current assets.
        </Typography>
      </Grid>
      <Grid
       item 
       xs={12}
        sm={4}
        sx={{
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
        >
        <Typography variant="h5" gutterBottom>
          Innovation
        </Typography>
        <Typography variant="body1">
        We are striving for innovation, blending our global experiences with local demands. Our solutions are the combination of brilliant ideas met with equally diligent team.
        </Typography>
      </Grid>
    </Grid>
  </Box>

    {/* Methodology, Client’s Response, and Going Green Section */}
    <Box sx={{ padding: 4 ,marginLeft:8,marginRight:6 }}>
    <Grid container spacing={3}>
      <Grid 
      item
       xs={12}
        sm={4}
        sx={{
          height:250,
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
        >
        <Typography variant="h5" gutterBottom>
          Methodology
        </Typography>
        <Typography variant="body1">
        Our time tested business methodology, and structured solution building approach, we ensure to maintain our global business standards. Therefore we adopt a customer success model.The process of coding and designing is cumbersome task as slight errors in the techniques can defy the purpose of the project to a certain extent.
        </Typography>
      </Grid>
      <Grid
       item 
       xs={12}
        sm={4}
        sx={{
          borderRadius: '8px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          padding: 2,
          backgroundColor: 'white',
        }}
        >
        <Typography variant="h5" gutterBottom>
          Client’s Response
        </Typography>
        <Typography variant="body1">
        Our clients have given grateful response regarding our Quality of work and we strive to maintain the same methodologies which give optimized results to our worthy clients.
        </Typography>
      </Grid>
      <Grid 
      item
       xs={12}
       sm={4}
       sx={{
        borderRadius: '8px', 
        transition: 'transform 0.3s, box-shadow 0.3s', 
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        },
        padding: 2,
        backgroundColor: 'white',
      }}
       >
        <Typography variant="h5" gutterBottom>
          Going Green
        </Typography>
        <Typography variant="body1">
        We are aspiring green, environment friendly company. We have been adopting for eco-friendly technologies from day one. We are striving for paperless office and solar energy.
        </Typography>
      </Grid>
    </Grid>
  </Box>
</Box>

      <Stats />
    </>
      )}
  </>
  )
}
export default AboutUs;
