import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email'; 
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: `url('/images/contact.jpg')`,
      }}
    >
      <Paper 
        className="contact-us" 
        elevation={0} 
        sx={{ 
          backgroundColor: 'transparent', 
          padding: '40px', 
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '16px', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '24px', fontWeight: 500, color: 'white' }}>
          We always try to go an extra mile to provide excellent services to our clients. 
          We ensure our maximum availability to assist our clients when they need us.
        </Typography>
        <Typography variant="body2" 
          sx={{
            height: '70px',
            marginBottom: '16px',
            border: '1px solid white', // Optional: Change border color to white
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white' // Change text color
          }}
        >
          <EmailIcon sx={{ marginRight: '8px', color: 'white' }} />  
          <strong>Email:</strong>
          <br /> 
          <a href="mailto:info@codezy.com" style={{ color: 'white' }}>info@codezy.com</a>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              variant="outlined"
              fullWidth
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                sx: { color: 'white' }, // Change input text color
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Change border color of the text field
                },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffa500', 
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white', // Change the text color
                },
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                sx: { color: 'white' }, // Change input text color
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Change border color of the text field
                },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffa500', 
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white', // Change the text color
                },
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              InputProps={{
                sx: { color: 'white' }, 
              }}
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', 
                },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffa500', 
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white', // Change the text color
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#ffa500',
                width: '150px', 
                height: '60px', 
                fontSize: '16px', 
                alignSelf: 'center',
                borderTopLeftRadius: '32px',
                borderBottomRightRadius: '30px',
                '&:hover': {
                  backgroundColor: '#004d99', // Darker shade for hover effect
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactUs;
