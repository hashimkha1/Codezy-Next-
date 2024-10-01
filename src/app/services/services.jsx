"use client";
import React, { useState, useContext, useEffect } from 'react';
import './ServicesSection.css';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { LaptopMac, PhoneAndroid, TrendingUp, Cloud, Security, Storage, DesignServices, ShoppingCart, DashboardCustomize } from '@mui/icons-material';
import { styled } from '@mui/system';
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Head from './head';
import { DescriContext } from '@/components/context/description';

// Rotating icon styling
const RotatingIcon = styled(Box)(({ isHovered }) => ({
    display: 'inline-block',
    transition: 'transform 1s ease',
    transform: isHovered ? 'rotate(-360deg)' : 'none',
    color: isHovered ? '#ffa500' : 'inherit',
    cursor: isHovered ? 'pointer' : 'default',
}));

// Icon mapping
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

const ServicesSection = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { services, desc } = useContext(DescriContext);

    // Log services and desc to debug
    useEffect(() => {
        console.log('Services:', services);
        console.log('Desc:', desc);
    }, [services, desc]);

    // Find the business strategies description
    const data = desc ? desc.find(item => item.title === 'Our Business Strategies') : null;

    const toggleReadMore = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <Box sx={{ p: 4, textAlign: 'center' }}>
                {/* Section title */}
                <Typography variant="h3" sx={{ mb: 6, mt: 4 }} gutterBottom>
                    What we are offering
                </Typography>

                {/* Service cards */}
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={0}
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    {services && services.length > 0 ? services.map((service, index) => {
                        const isExpanded = expandedCard === index;
                        const truncatedDescription = `${service.description.substring(0, 100)}...`;

                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={index}
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Card
                                    sx={{
                                        height: isExpanded ? 'auto' : '340px',
                                        textAlign: 'center',
                                        maxWidth: '400px',
                                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        '&:hover':{
                                            cursor:'pointer'
                                        }
                                    }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <CardContent>
                                        <RotatingIcon isHovered={hoveredIndex === index} sx={{ mb: 7, mt: 4 }}>
                                            {iconMapping[service.iconName]}
                                        </RotatingIcon>
                                        <Typography
                                          
                                            variant="h6"
                                            sx={{ mb: 2, '&:hover': { color: '#ffa500', cursor: 'pointer' } }}
                                            gutterBottom
                                        >
                                            <Head title={service.title} />
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontSize: 15, fontFamily: 'revert' }} color="textSecondary">
                                            {isExpanded ? service.description : service.description.length > 200 ? truncatedDescription : service.description}
                                        </Typography>
                                        {service.description.length > 200 && (
                                            <button
                                                className="px-3 py-1 text-black focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                                                onClick={() => toggleReadMore(index)}
                                                style={{ marginTop: 6 }}
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    }) : (
                        <p>No services available</p>
                    )}
                </Grid>
            </Box>
            <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h3" sx={{ mb: 6, mt: 4 }} gutterBottom>
                        {data.title}
                </Typography>  
                <section className="services-text-section">
                    <div className="services-text-content">
                        {data ? (
                            <TextGenerateEffect words={data.description} />
                        ) : (
                            <p>No description found</p>
                        )}
                    </div>
                </section>
            </Box>
        </>
    );
}

export default ServicesSection;
