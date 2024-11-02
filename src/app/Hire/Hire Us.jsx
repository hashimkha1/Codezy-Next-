import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Slider,
    Box,
    Grid,
    Chip,
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

const HireUs = () => {
    const budgetMarks = [
        { value: 1000, label: '$1K' },
        { value: 25000, label: '$25K' },
        { value: 50000, label: '$50K' },
        { value: 75000, label: '$75K' },
        { value: 100000, label: '$100K' },
    ];

    const [budget, setBudget] = useState([1000, 100000]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleBudgetChange = (event, newValue) => {
        setBudget(newValue);
    };

    const handleServiceChange = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
            const response = await fetch('http://localhost:5000/api/hireus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                alert('Form submitted successfully');
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setSelectedServices([]);
                setBudget([1000, 100000]);
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const services = ["Website", "Mobile App", "Digital Product", "Software Development"];

    return (
        <Container maxWidth="lg" style={{ backgroundColor: '#fff' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ marginTop: '130px' }}>
                    <Typography variant="h6" gutterBottom>
                        Need a Digital Partner?
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Let's <br /> Work<span style={{ color: '#ffa500' }}>Together</span>
                    </Typography>
                    <Box textAlign="left" mb={4}>
                        <Typography variant="body1"><strong>EMAIL:</strong> info@quhdock.com</Typography>
                        <Typography variant="body1"><strong>PHONE:</strong> +923124026251</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ marginTop: '130px' }}>
                    <Typography variant="h6">Services you are looking for:</Typography>
                    <Box mb={2}>
                        {services.map((service) => (
                            <Chip
                                key={service}
                                label={service}
                                onClick={() => handleServiceChange(service)}
                                color={selectedServices.includes(service) ? 'primary' : 'default'}
                                sx={{
                                    margin: '5px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedServices.includes(service) ? '#ffa500' : '#fff',
                                    color: selectedServices.includes(service) ? '#fff' : '#000',
                                    borderRadius: 0,
                                    border: `1px solid ${selectedServices.includes(service) ? '#000' : '#e0e0e0'}`,
                                }}
                            />
                        ))}
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
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
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' }
                                    }
                                }} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' }
                                    }
                                }} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
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
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffa500' }
                                    }
                                }} 
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>Approx. budget</Typography>
                    <Slider
                        value={budget}
                        onChange={handleBudgetChange}
                        valueLabelDisplay="auto"
                        step={1000}
                        marks={budgetMarks}
                        min={1000}
                        max={100000}
                        sx={{
                            color: '#ffa500',
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#ffa500',
                                '&:hover': { backgroundColor: '#ff8c00' },
                            },
                            '& .MuiSlider-track': { backgroundColor: '#ffa500' },
                            '& .MuiSlider-rail': { backgroundColor: '#e0e0e0' },
                        }}
                    />
                    <Typography variant="h6" gutterBottom>{`Selected range: $${budget[0].toLocaleString()} - $${budget[1].toLocaleString()}`}</Typography>

                    <TextField
                        label="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ style: { color: '#000' } }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#000' },
                                '&:hover fieldset': { borderColor: '#ffa500' },
                                '&.Mui-focused fieldset': { borderColor: '#ffa500' },
                                color: '#000',
                            },
                        }}
                    />
                 
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button
                            variant="contained" 
                            color="primary" 
                            onClick={handleSubmit}
                            sx={{
                                marginBottom:'30px',
                                backgroundColor: '#ffa500',
                                '&:hover': { backgroundColor: '#ff8c00' },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HireUs;
