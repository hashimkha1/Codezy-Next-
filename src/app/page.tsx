'use client'
import React, { useState, useEffect,useRef,useCallback } from "react";
import { CardHoverEffectDemo } from "../components/Services/Service";
import { ImagesSliderDemo } from "@/components/hero";
import { InfiniteMovingCardsDemo } from "@/components/card";
import { TimelineDemo } from "../components/ Timeline";
import About from "../components/About/about";
import Stats from "../components/stats";
import Loader from "../components/loader/loader";
import Chatbot from "../components/chatbot/Chatbot";
import { Fab, Box, Avatar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const alertSound = '/alert1.mp3';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showText, setShowText] = useState(false); 
  const playCountRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const playSound = useCallback(() => {
    if (playCountRef.current < 2) {
      const sound = new Audio(alertSound);
      sound.volume = 0.8; 
      console.log('sound');
      sound.play();
      playCountRef.current += 1; 
      setShowText(true); 
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const timeoutId = setTimeout(() => {
        playSound();
      }, 1000);

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [playSound]);


  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setShowText(false); 
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
       
          <Fab  
            aria-label="chat"
            sx={{ position: "fixed", bottom: 36, right: 86 ,background: '#fff' }}
            onClick={toggleChatbot}
          >
            {showChatbot ? (
              
              <ClearIcon style={{ fontSize: 40 }} />
            ) : (
              <Avatar
                alt="Chatbot"
                src="/images/chatbot.jpeg" 
                sx={{ width: 56, height: 56 }}
              />
            )}
          </Fab>
          {showChatbot && (
            <Box
              sx={{
                position: "fixed",
                bottom: 100,
                right: 16,
                zIndex: 1000,
                width: "290px",
              }}
            >
              <Chatbot />
            </Box>
          )}

          {showText && !showChatbot && (
            <Box
            sx={{
              position: "fixed",
              bottom: 100,
              right: 4,
              zIndex: 1000,
              backgroundColor: "#333",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer", 
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,  
                left: "50%",
                transform: "translateX(-50%)", 
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #333", 
              },
            }}
            >
              <p style={{color:"white"}}>Have a question? Click here to chat!</p>
            </Box>
          )}
        </>
      )}
    </>
  );
}
