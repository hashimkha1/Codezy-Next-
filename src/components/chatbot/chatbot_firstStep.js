import React, { useState,useRef,useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';;
import io from 'socket.io-client';

let socket;
export default function Chatbotstep1() {
  const [tabValue, setTabValue] = useState(0); 
  const [chatHistory, setChatHistory] = useState([]); 
  const [showChat, setShowChat] = useState(false); 
  const chatContainerRef = useRef(null);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    // If the user clicks on the Messages tab, switch to the chat step
    if (newValue === 1) {
      setShowChat(true);
    }
  };
  useEffect(() => {
    const savedChatHistory = localStorage.getItem('chatHistory');
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
    if (savedFiles) {
      setUploadedFiles(JSON.parse(savedFiles));
    }

    socket = io('http://localhost:5000');

    socket.on('receiveMessage', (data) => {
      setChatHistory((prev) => {
        const newHistory = [...prev, { sender: 'Bot', message: data.message }];
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        return newHistory;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  // Toggle to open the chat when "Send us a message" is clicked
  const handleOpenChat = () => {
    setShowChat(true);
    setTabValue(1); // Switch to the Messages tab
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

 

  return (
   
          <>
            {/* First step: Greeting screen */}
            <Box
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '4px 4px 0 0',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">Messages</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', p: 4 }}>
              <Avatar
                sx={{
                  backgroundColor: '#e0e0e0',
                  color: '#000',
                  width: 50,
                  height: 50,
                  mb: 2,
                  margin: '0 auto',
                }}
              >
                <MessageIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom>
                No messages
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Messages from the team will be shown here
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 4 }}
                onClick={handleOpenChat}
              >
                Send us a message
              </Button>
            </Box>

            {/* Tabs at the bottom */}
            <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ backgroundColor: '#f5f5f5' }}
              >
                <Tab icon={<HomeIcon />} label="Home" />
                <Tab icon={<MessageIcon />} label="Messages" />
              </Tabs>
            </Box>
          </>
       
     
  );
}
