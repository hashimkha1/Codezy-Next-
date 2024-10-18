import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
  IconButton,
  Container,
  List,
  ListItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Card,
  DialogTitle,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MessageIcon from '@mui/icons-material/Message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Picker from '@emoji-mart/react';
import ClearIcon from '@mui/icons-material/Clear';
import io from 'socket.io-client';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';
import '../css/Chatbot.css'

const placeholders = [
  'Need custom app development?',
  'Looking for web solutions?',
  'Ready to start coding?',
  'Have a software question?',
];

let socket;
export default function Chatbot() {
  const [tabValue, setTabValue] = useState(0); 
  const [showChat, setShowChat] = useState(false); 
  const [chatHistory, setChatHistory] = useState([]); 
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false); // State for showing buttons for bot or human
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
    socket = io('http://localhost:8000'); 
    socket.on('receiveMessage', (data) => {
      setLoading(false);
      setChatHistory((prev) => {
        const newHistory = [...prev, { sender: data.sender, message: data.message }];
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        return newHistory;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleOpenChat = () => {
    setShowChat(true);
    setTabValue(1);
  };

  useEffect(() => {
    if (showChat && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, showChat]);

  const handleBack = () => {
    setShowChat(false);
    setTabValue(0); 
  };

  const sendMessage = () => {
    if (message || file) {
      const newMessage = file ? `File: ${file.name}` : message;
      socket.emit('sendMessage', { message: newMessage });

      setChatHistory((prev) => {
        const newHistory = [...prev, { sender: 'You', message: newMessage }];
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));

        // Show options only after the first user message
        if (newHistory.filter((msg) => msg.sender === 'You').length === 1) {
          setShowOptions(true);
        }

        return newHistory;
      });

      if (file) {
        const newFiles = [...uploadedFiles, file.name];
        setUploadedFiles(newFiles);
        localStorage.setItem('uploadedFiles', JSON.stringify(newFiles));
        setFile(null);
      }

      setMessage('');
      setLoading(true);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const openClearChatConfirmation = () => {
    setOpenConfirmation(true);
  };

  const handleClearChatConfirm = () => {
    setChatHistory([]);
    setUploadedFiles([]);
    localStorage.removeItem('chatHistory');
    localStorage.removeItem('uploadedFiles');
    setOpenConfirmation(false);
  };

  const handleClearChatCancel = () => {
    setOpenConfirmation(false); 
  };

  const handleBotChoice = () => {
    // User chooses to continue talking to the bot
    setShowOptions(false);
    setChatHistory((prev) => [...prev, { sender: 'System', message: 'You are now talking to the bot.' }]);
    socket.emit('userChoice', 'bot');
  };

  const handleHumanChoice = () => {
    // User chooses to talk to a human
    setShowOptions(false);
    setChatHistory((prev) => [...prev, { sender: 'System', message: 'You are now talking to a human representative.' }]);
    socket.emit('userChoice', 'human');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: { xs: 500, md: 500 },
          height: '600px',
          borderRadius: 4,
          mr: { xs: 25, md: 30 },
        }}
      >
        {!showChat ? (
          <>
            {/* Main Chat Box */}
            <Box
              sx={{
                width: { xs: '95%', sm: 400, md: 500 },
                height: '600px',
                margin: 'auto',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#000', // Main background color
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  backgroundColor: '#000', // Black background
                  color: '#fff', // White text
                  padding: 2, // Padding
                  display: 'flex', // Flexbox layout
                  justifyContent: 'space-between', // Space between text and avatar
                  alignItems: 'center', // Align items vertically
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Hi there 👋
                </Typography>
                <Avatar
                  alt="Profile Picture"
                  src="/images/avator.jpeg" // Update with actual image path
                  sx={{ width: 40, height: 40 }}
                />
              </Box>
          
              {/* Main Content */}
              <Box
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                  padding: 3,
                  background: 'linear-gradient(to bottom, #000, #fff)', // Black to white gradient
                  color: '#fff',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    marginBottom: 2,
                  }}
                >
                  How can we help?
                </Typography>
                <Card
                  onClick={handleOpenChat}
                  sx={{
                    backgroundColor: '#fff', // White background
                    borderRadius: '8px', // Rounded corners
                    padding: 2, // Padding
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
                    marginBottom: 4,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 'bold', color: '#000' }}>Send us a message</Typography>
                    <Typography sx={{ color: '#888', fontSize: '12px' }}>
                      We typically reply within 4 hours
                    </Typography>
                  </Box>
                  <IconButton>
                    <ArrowForwardIcon sx={{ color: '#000', fontSize: '20px' }} />
                  </IconButton>
                </Card>
              </Box>
          
              {/* Bottom Tabs */}
              <Box
                sx={{
                  backgroundColor: '#fff', // White background for tabs
                  borderTop: '1px solid #ddd', // Light border on top
                  p: 1, // Padding
                }}
              >
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  sx={{
                    '& .MuiTab-root': {
                      minHeight: 56, // Adjust height of each tab
                      color: '#000', // Black text for inactive tabs
                      '&.Mui-selected': {
                        color: '#000', // Black for selected tab
                      },
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#000', // Black indicator for selected tab
                    },
                  }}
                >
                  <Tab
                    icon={<HomeIcon />}
                    label="Home"
                    sx={{
                      '& .MuiTab-wrapper': {
                        flexDirection: 'row', // Arrange icon and label horizontally
                        justifyContent: 'center',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: '24px',
                        marginRight: '8px',
                      },
                    }}
                  />
                  <Tab
                    icon={<MessageIcon />}
                    label="Messages"
                    sx={{
                      '& .MuiTab-wrapper': {
                        flexDirection: 'row',
                        justifyContent: 'center',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: '24px',
                        marginRight: '8px',
                      },
                    }}
                  />
                </Tabs>
                <Typography sx={{ textAlign: 'center', fontSize: '12px', color: '#888', mt: 1 }}>
                  Powered by Codezy
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <>
            {/* Chat Content */}
            <Box
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: 4,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <IconButton onClick={handleBack} sx={{ color: '#fff' }}>
                <ArrowBackIcon />
              </IconButton>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="./favicon.io" alt="Agent" sx={{ mr: 1 }} />
                <Typography variant="h6">Codezy</Typography>
              </Box>
              <InsertEmoticonIcon sx={{ color: '#00FF00' }} /> 
            </Box>

            <Box
              ref={chatContainerRef}
              sx={{ p: 2, height: '440px', overflowY: 'auto', backgroundColor: '#f5f5f5' }}
            >
              {chatHistory.map((chat, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: chat.sender === 'You' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: chat.sender === 'You' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: chat.sender === 'You' ? '#2196f3' : '#e0e0e0',
                        mb: 1,
                      }}
                      >
                      {chat.sender === 'You' ? (
                        <Avatar src="/images/avator.jpeg" />
                      ) : (
                        <Avatar src="/images/chatbot.jpeg" />
                      )}
                    </Avatar>
                    <Typography
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: chat.sender === 'You' ? '#2196f3' : '#fff',
                        color: chat.sender === 'You' ? '#fff' : '#000',
                        maxWidth: '100%',
                        wordBreak: 'break-word',
                        boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
                      }}
                    >
                      {chat.message}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {uploadedFiles.length > 0 && (
                <List>
                  {uploadedFiles.map((file, index) => (
                    <ListItem key={index}>
                      <AttachFileIcon />
                      <Typography>{file}</Typography>
                    </ListItem>
                  ))}
                </List>
              )}
                {loading && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    mt: 2,
                  }}
                >
                  <Avatar src="/images/chatbot.jpeg" sx={{ mr: 1 }} />
                  <div className="dot-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </Box>
              )}

              {/* Bot or Human Option Buttons */}
              {showOptions && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBotChoice}
                    sx={{ textTransform: 'none' }}
                  >
                    Talk to Bot
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleHumanChoice}
                    sx={{ textTransform: 'none' }}
                  >
                    Talk to Human
                  </Button>
                </Box>
              )}
            </Box>

            <Box sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => setShowEmojiPicker((prev) => !prev)}>
                  <InsertEmoticonIcon />
                </IconButton>
                {showEmojiPicker && (
                  <Picker
                    onEmojiSelect={handleEmojiClick}
                    style={{ position: 'absolute', bottom: '60px', left: '10px' }}
                  />
                )}
                <IconButton component="label">
                  <AttachFileIcon />
                  <input type="file" hidden onChange={handleFileChange} />
                </IconButton>
                <IconButton onClick={openClearChatConfirmation} color="secondary">
                  <ClearIcon />
                </IconButton>

                <PlaceholdersAndVanishInput
                  fullWidth
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholders={placeholders}
                  variant="outlined"
                  size="small"
                  onSubmit={sendMessage}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
              </Box>
            </Box>
          </>
        )}
      </Paper>
      <Dialog
        open={openConfirmation}
        onClose={handleClearChatCancel}
        aria-labelledby="clear-chat-dialog-title"
        aria-describedby="clear-chat-dialog-description"
      >
        <DialogTitle id="clear-chat-dialog-title">{'Clear Chat History?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="clear-chat-dialog-description">
            Are you sure you want to clear all messages and uploaded files? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClearChatCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClearChatConfirm} color="secondary" autoFocus>
            Clear Chat
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
