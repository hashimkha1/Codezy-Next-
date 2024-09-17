import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
// import about from './images/about.jpg';
import Image from 'next/image'



const About = () => {
  return (
    <>
    <Box  component="section" >
    <Grid container rowSpacing={1} sx={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10}} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        <Grid size={6} sx={{border:'0px'}}>
          <div>
            <Typography variant='h3'>About Us</Typography>
            <p>If you own a business, have ambitious growth goals, and are looking for an awesome partner to help you measurably improve your marketing performance and get more leads and sales from the web, you’ve come to the right place. We believe that, “Good is not good, where better is expected”. Quality for us is our commitment to our trusted clients, we want them to own our name and relish on the products and services we provide them. Our main emphasis is to deliver maximum determination in every project we undertake. With our time tested business methodology, and structured solution building approach, we ensure to maintain our global business standards.</p>
          </div>
        </Grid>
        <Grid size={6}>
          <div>
          <img src='../images/about.jpg' alt="About Us Image" />
          </div>
        </Grid>
       
    </Grid>
    </Box>
    </>
  )
}

export default About