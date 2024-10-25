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
          To provide innovative services of the highest order to our valued clients globally, fostering continuous improvement.
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
          To become the world’s leading software house, trusted as IT partners by other multinational corporations.
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
          We ensure that quality is maintained in today’s rapid development through test automation and comprehensive QA services.
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
          Our unique approach blends IT innovations with practical implementations, leveraging current organizational assets.
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
          We strive for innovation by blending global experiences with local demands to deliver brilliant solutions.
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
          With a time-tested methodology and structured solution-building, we maintain global business standards for customer success.
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
          Our clients appreciate our quality of work, and we strive to maintain the same methodologies for optimized results.
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
          We are an eco-friendly company, striving for a paperless office and adopting solar energy from day one.
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
