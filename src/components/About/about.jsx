import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Box component="section" sx={{ px: { xs: 2, sm: 5, md: 10 }, py: { xs: 5, sm: 10 }, mt: { xs: 5, md: 10 },ml:{md:10,xs:0},mr:{md:10,xs:0} }}>
        <Grid container spacing={3}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you own a business, have ambitious growth goals, and are looking for an awesome partner to help you measurably improve your marketing performance and get more leads and sales from the web, you’ve come to the right place. 
              We believe that, “Good is not good, where better is expected”. Quality for us is our commitment to our trusted clients. Our main emphasis is to deliver maximum determination in every project we undertake. 
              With our time-tested business methodology, and structured solution building approach, we ensure to maintain our global business standards.
            </Typography>
          </Grid>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: 'auto' }}>
              <img src="../images/about.jpg" alt="About Us Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
