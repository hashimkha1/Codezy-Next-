"use client";
import React, { useEffect, useState, useContext } from 'react';
import { Box,
   Grid, 
  TextField,
  Typography, 
  Button,
  Chip,
  Container,
  Stepper, 
  Step,
  StepLabel, 
  InputLabel ,
  Select,
  Paper,
  MenuItem,
  Checkbox,
  Slider } from '@mui/material';
  import Link from 'next/link';
import { DescriContext } from '@/components/context/description';
import { MuiTelInput } from 'mui-tel-input';
import FormControl from '@mui/material/FormControl';


const services = ['Website', 'Mobile App', 'Digital Product', 'Software Development'];

const HireUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentStep, setCurrentStep] = useState(0); // Step tracking
  const [budget, setBudget] = useState([1000, 100000]);
  const [availability, setAvailability] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [meetingDuration, setMeetingDuration] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const { loading } = useContext(DescriContext);
  const [seconds, setSeconds] = useState(0);
  const [isMeetingActive, setIsMeetingActive] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
      meetingID: "",
      host: "John Doe",
      startTime: new Date().toLocaleTimeString(),
  });

  const meetingLink = "https://meet.google.com/gpv-qivz-qbe";
  useEffect(() => {
    if (loading) return;

    let timerInterval;
    if (isMeetingActive) {
        timerInterval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    } else {
        clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
}, [isMeetingActive, loading]);

const startMeeting = () => setIsMeetingActive(true);
const stopMeeting = () => setIsMeetingActive(false);


  // Budget marks for the slider
  const budgetMarks = [
    { value: 1000, label: '$1K' },
    { value: 25000, label: '$25K' },
    { value: 50000, label: '$50K' },
    { value: 75000, label: '$75K' },
    { value: 100000, label: '$100K' },
  ];

  const handleBudgetChange = (event, newValue) => {
    setBudget(newValue);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
    );
  };
  
  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
};

const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
};

const handleMeetingTypeChange = (event) => {
    setMeetingType(event.target.value);
};

const handleMeetingDurationChange = (event) => {
    setMeetingDuration(event.target.value);
};

const handleSpecialRequestsChange = (event) => {
    setSpecialRequests(event.target.value);
};


  // Form submission and step change
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    const dataToSend = {
      ...formData,
      budget,
      selectedServices,
    };

    try {
      const response = await fetch('http://localhost:8000/api/hire-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setSelectedServices([]);
        setBudget([1000, 100000]);
        setCurrentStep(1); // Move to Step 2
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const handleSubmit2 = () => {
    if (availability && contactMethod && meetingType && meetingDuration && specialRequests) {
      alert("submitted successfully!");
      setCurrentStep(2); // Move to Step 3
    } else {
      alert("Please fill out all fields in Step 2 before proceeding.");
    }
  };

  const steps = ['Step 1: Enter Your Details', 'Step 2: Confirmation', 'Step 3: Final Step'];

  return (
    <Container>
      <Stepper activeStep={currentStep} alternativeLabel sx={{ mt: '150px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step 1: Form Fields */}
      {currentStep === 0 && (
        <Box>
          <Grid container spacing={4}>
            {/* Left side: Intro Content and Contact Info */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', mt: '100px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Typography variant="h6" gutterBottom>
                Need a Digital Partner?
              </Typography>
              <Typography variant="h4" gutterBottom>
                Let's <br /> Work<span style={{ color: '#ffa500' }}>Together</span>
              </Typography>
              
              <Box textAlign="left" mb={4} sx={{ marginTop: '20px' }}>
                <Typography variant="body1">
                  <strong>EMAIL:</strong> info@codezy.com
                </Typography>
                <Typography variant="body1">
                  <strong>PHONE:</strong> +923124026251
                </Typography>
              </Box>
            </Grid>

            {/* Right side: Services Chips, Budget Slider, and Form Inputs */}
            <Grid item xs={12} md={6} sx={{ marginTop: '30px' }}>
              <Typography variant="h6">Services you are looking for:</Typography>
              {/* Services Chips Section */}
              <Box mb={2} display="flex" flexWrap="wrap">
                {services.map((service) => (
                  <Chip
                    key={service}
                    label={service}
                    onClick={() => handleServiceChange(service)}
                    color={selectedServices.includes(service) ? 'primary' : 'default'}
                    sx={{
                      margin: '6px',
                      cursor: 'pointer',
                      backgroundColor: selectedServices.includes(service) ? '#ffa500' : '#fff',
                      color: selectedServices.includes(service) ? '#fff' : '#000',
                      borderRadius: 0,
                      border: `1px solid ${selectedServices.includes(service) ? '#000' : '#e0e0e0'}`,
                    }}
                  />
                ))}
              </Box>

              {/* Form Inputs */}
              <Grid container spacing={1} >
                <Grid item xs={12} md={6} >
                  <TextField
                    label="Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: '#000' } }}
                    InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email*"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: '#000' } }}
                    InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}> 
                  <MuiTelInput 
                    label="Phone" 
                    value={formData.phone}
                    onChange={handlePhoneChange} 
                    fullWidth
                    margin="normal" 
                    InputLabelProps={{ style: { color: '#000' } }}
                    InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Company*"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: '#000' } }}
                    InputProps={{
                      sx: {
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Message Field */}
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                required
                InputLabelProps={{ style: { color: '#000' } }}
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                  },
                }}
                sx={{ marginBottom: 2 }}
              />

              {/* Budget Slider */}
              <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                Approx. budget
              </Typography>
              <Slider
                value={budget}
                onChange={handleBudgetChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                min={1000}
                max={100000}
                step={1000}
                marks={budgetMarks}
                sx={{
                  marginBottom: 2,
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#ffa500',
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: '#ffa500',
                  },
                }}
              />

              {/* Submit Button */}
              <Button 
                        variant="contained" 
                        color="primary"     
                        onClick={handleSubmit}
                        sx={{
                            marginTop: 3,
                            marginLeft: 25,
                            width: '25%',
                            backgroundColor: '#ffa500',
                            '&:hover': { backgroundColor: '#ff8c00' },
                        }}
                    >
                        Submit
                    </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Step 2: Confirmation */}
      {currentStep === 1 && (
              <Grid item xs={12} md={6} sx={{ marginTop: '70px',marginLeft:'270px' }} >
           

              {/* Availability and Preferences Section */}
              <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                textAlign: 'center', // Centers the text horizontally
                display: 'flex', // Makes the container a flexbox
                justifyContent: 'center', // Centers the content horizontally
                alignItems: 'center', // Centers the content vertically (useful if the height is set)
               marginRight:'220px'
              }}
            >
              Availability and Preferences
            </Typography>
                <Box sx={{ width: '70%', marginBottom: 2 }}>
                  <FormControl fullWidth>
                      
                        <InputLabel
                        sx={{
                          '&.Mui-focused': {
                            color: 'black', // Change the label color on focus
                          },
                        }}
                      > When are you available?</InputLabel>
                      <Select
                      value={availability}
                      onChange={handleAvailabilityChange}
                      sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Black border color for the default state
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ffa500', // Orange border color when hovering
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Keep the border color black on focus
                          },
                          '& .MuiSelect-icon': {
                            color: 'black', // Optional: Change the color of the dropdown icon if needed
                          },
                      }}
                      >
                      <MenuItem value="morning">Morning (8 AM - 12 PM)</MenuItem>
                      <MenuItem value="afternoon">Afternoon (12 PM - 4 PM)</MenuItem>
                      <MenuItem value="evening">Evening (4 PM - 8 PM)</MenuItem>
                      </Select>
                  </FormControl>
                  </Box>

                  <Box sx={{ width: '70%', marginBottom: 2 }}>
                  <FormControl fullWidth>
                      <InputLabel
                      sx={{
                          '&.Mui-focused': {
                          color: 'black', // Change the label color on focus
                          },
                      }}
                      >
                      Preferred Contact Method
                      </InputLabel>
                      <Select
                      value={contactMethod}
                      label="Preferred Contact Method"
                      onChange={handleContactMethodChange}
                      sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Black border color for the default state
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ffa500', // Orange border color when hovering
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Keep the border color black on focus
                          },
                          '& .MuiSelect-icon': {
                          color: 'black', // Optional: Change the color of the dropdown icon
                          },
                          '& .MuiSelect-select': {
                          color: 'black', // Change the text color inside the Select box
                          },
                          '&.Mui-focused .MuiSelect-select': {
                          color: 'black', // Keep text color black when focused
                          },
                      }}
                      >
                      <MenuItem value="email">Email</MenuItem>
                      <MenuItem value="videocall">Video Call</MenuItem>
                      <MenuItem value="whatsapp">WhatsApp</MenuItem>
                      </Select>
                  </FormControl>
                  </Box>

                  <Box sx={{ width: '70%', marginBottom: 2 }}>
                  <FormControl fullWidth>
                      <InputLabel
                      sx={{
                          '&.Mui-focused': {
                          color: 'black', // Change the label color on focus
                          },
                      }}
                      >
                      Preferred Meeting Type
                      </InputLabel>
                      <Select
                      value={meetingType}
                      label="Preferred Meeting Type"
                      onChange={handleMeetingTypeChange}
                      sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Black border color for the default state
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ffa500', // Orange border color when hovering
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Keep the border color black on focus
                          },
                          '& .MuiSelect-icon': {
                          color: 'black', // Optional: Change the color of the dropdown icon
                          },
                          '& .MuiSelect-select': {
                          color: 'black', // Change the text color inside the Select box
                          },
                          '&.Mui-focused .MuiSelect-select': {
                          color: 'black', // Keep text color black when focused
                          },
                      }}
                      >
                      <MenuItem value="one-on-one">One-on-One</MenuItem>
                      <MenuItem value="group">Group</MenuItem>
                      <MenuItem value="casual">Casual</MenuItem>
                      </Select>
                  </FormControl>
                  </Box>

                  <Box sx={{ width: '70%', marginBottom: 2 }}>
                  <FormControl fullWidth>
                      <InputLabel
                      sx={{
                          '&.Mui-focused': {
                          color: 'black', // Change the label color on focus
                          },
                      }}
                      >
                      Meeting Duration
                      </InputLabel>
                      <Select
                      value={meetingDuration}
                      label="Meeting Duration"
                      onChange={handleMeetingDurationChange}
                      sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Black border color for the default state
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ffa500', // Orange border color when hovering
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#000', // Keep the border color black on focus
                          },
                          '& .MuiSelect-icon': {
                          color: 'black', // Optional: Change the color of the dropdown icon
                          },
                          '& .MuiSelect-select': {
                          color: 'black', // Change the text color inside the Select box
                          },
                          '&.Mui-focused .MuiSelect-select': {
                          color: 'black', // Keep text color black when focused
                          },
                      }}
                      >
                      <MenuItem value="30">30 minutes</MenuItem>
                      <MenuItem value="60">1 hour</MenuItem>
                      <MenuItem value="90">1.5 hours</MenuItem>
                      </Select>
                  </FormControl>
                  </Box>

                  <TextField
                  label="Special Requests"
                  value={specialRequests}
                  onChange={handleSpecialRequestsChange}
                  fullWidth
                  multiline
                  rows={3}
                  sx={{
                      width: '70%',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#000' },
                      '& .MuiInputBase-input': {
                      color: 'black', // Set text color inside TextField to black
                      },
                      '&.Mui-focused .MuiInputBase-input': {
                      color: 'black', // Keep text color black when focused
                      },
                  }}
                  />
                         {/* Submit Button */}
              <Button 
                        variant="contained" 
                        color="primary"     
                        onClick={handleSubmit2}
                        sx={{
                            marginTop: 3,
                            marginLeft: 25,
                            marginBottom:3,
                            width: '15%',
                            backgroundColor: '#ffa500',
                            '&:hover': { backgroundColor: '#ff8c00' },
                        }}
                    >
                        Submit
                    </Button>


          </Grid>
        
      )}
      
      {/* Step 3: Final */}
      {currentStep === 2 && (
              <Container maxWidth="md" sx={{ paddingY: 4 }}>
           
              <Paper elevation={0} sx={{ padding: 20, border: 'none', backgroundColor: '#f5f5f5' }}>
                  <Typography variant="h4" gutterBottom align="center" sx={{ color: '#3f51b5' }}>
                      Meeting Details
                  </Typography>
                  
                  <Box sx={{ marginBottom: 3 }}>
                      {/* <Typography variant="h6" sx={{ color: '#333' }}>Meeting ID: {meetingLink}</Typography> */}
                      <Typography variant="h6" sx={{ color: '#333' }}>
                          Meeting ID: 
                          <Link href={meetingLink} style={{ color: '#1e88e5', textDecoration: 'underline' }}>
                              {meetingLink}
                          </Link>
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#333' }}>Host: {meetingDetails.host}</Typography>
                      <Typography variant="body1" sx={{ color: '#555' }}>Start Time: {meetingDetails.startTime}</Typography>
                  </Box>
  
                  <Box sx={{ textAlign: 'center' }}>
                      {isMeetingActive ? (
                          <Box sx={{ marginTop: 3 }}>
                              <Typography variant="h6" sx={{ color: '#28a745' }}>Meeting is Ongoing</Typography>
                              <Typography variant="body1" sx={{ color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                  Elapsed Time: {Math.floor(seconds / 60)}:{seconds % 60}
                              </Typography>
                              <Button
                                  variant="contained"
                                  color="error"
                                  onClick={stopMeeting}
                                  sx={{ marginTop: 3, paddingX: 4, paddingY: 1.5, fontSize: '1rem' }}
                              >
                                  End Meeting
                              </Button>
                          </Box>
                      ) : (
                          <Box sx={{ marginTop: 3 }}>
                              <Typography variant="body1" sx={{ color: '#333' }}>Meeting Not Started</Typography>
                              <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={startMeeting}
                                  sx={{ marginTop: 6, paddingX: 4, paddingY: 1.5, fontSize: '1rem' }}
                              >
                                  Start Meeting
                              </Button>
                          </Box>
                      )}
                         <Button 
                        variant="contained" 
                        color="primary"     
                        onClick={() => setCurrentStep(0)}
                        sx={{
                            marginTop: 3,
                            width: '25%',
                            backgroundColor: '#ffa500',
                            '&:hover': { backgroundColor: '#ff8c00' },
                        }}
                    >
                        Back
                    </Button>
                       
                  </Box>
              </Paper>
          </Container>
      )}
    </Container>
  );
};

export default HireUs;
