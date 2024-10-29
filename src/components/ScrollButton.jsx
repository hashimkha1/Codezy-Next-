"use client";
import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollButton.css'; 

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 700); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showScroll && (
      <div 
       
        className="scroll-to-top" 
        color="primary" 
        aria-label="scroll back to top"
      >
        <ArrowUpwardIcon  onClick={scrollToTop}  />
      </div>
    )
  );
};

export default ScrollButton;


