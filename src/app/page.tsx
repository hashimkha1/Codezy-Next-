'use client'
import React, { useState, useEffect } from "react";
import { CardHoverEffectDemo } from "../components/Services/Service";
import { ImagesSliderDemo } from "@/components/hero";
import { InfiniteMovingCardsDemo } from "@/components/card";
import { TimelineDemo } from "../components/ Timeline";
import About from '../components/About/about';
import Stats from "../components/stats";
import Loader from '../components/loader/loader';
import Chatbot from '../components/chatbot/Chatbot';
import { Fab, Box } from "@mui/material";
import { IoChatbubbleEllipses } from "react-icons/io5";

import ClearIcon from '@mui/icons-material/Clear';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false); // State to toggle chatbot

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle the chatbot visibility
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ImagesSliderDemo />
          <About />
          <CardHoverEffectDemo />
          <TimelineDemo />
          <Stats />
          <InfiniteMovingCardsDemo />

          {/* Chatbot Icon */}
          <Fab 
            color="primary" 
            aria-label="chat" 
            sx={{ position: 'fixed', bottom: 36, right: 86 }} 
            onClick={toggleChatbot}
          >
             {showChatbot ?  (
            
            <ClearIcon style={{fontSize:40}}/>
             ):(
              <IoChatbubbleEllipses  style={{fontSize:40}}/>
             )}
          </Fab>

          {/* Conditionally Render Chatbot */}
          {showChatbot && (
            <Box 
              sx={{ 
                position: 'fixed', 
                bottom: 100, 
                right: 16, 
                zIndex: 1000, 
                width: '290px' 
              }}
            >
              <Chatbot />
            </Box>
          )}
        </>
      )}
    </>
  );
}
