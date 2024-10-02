import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,  // Import Dialog
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile'; 
import Picker from '@emoji-mart/react';
import ClearIcon from '@mui/icons-material/Clear';

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
let socket;

const placeholders = [
  "Need custom app development?",
  "Looking for web solutions?",
  "Ready to start coding?",
  "Have a software question?"
];


export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openConfirmation, setOpenConfirmation] = useState(false);  // Dialog state
  const chatContainerRef = useRef(null);

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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = () => {
    if (message || file) {
      const newMessage = file ? `File: ${file.name}` : message;
      socket.emit('sendMessage', { message: newMessage });

      setChatHistory((prev) => {
        const newHistory = [...prev, { sender: 'You', message: newMessage }];
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        return newHistory;
      });

      if (file) {
        const newFiles = [...uploadedFiles, file.name];
        setUploadedFiles(newFiles);
        localStorage.setItem('uploadedFiles', JSON.stringify(newFiles));
        setFile(null);  // Clear file after sending
      }

      setMessage('');
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Open the confirmation dialog
  const openClearChatConfirmation = () => {
    setOpenConfirmation(true);
  };

  // Handle the confirmation dialog's actions
  const handleClearChatConfirm = () => {
    setChatHistory([]);
    setUploadedFiles([]);
    localStorage.removeItem('chatHistory');
    localStorage.removeItem('uploadedFiles');
    setOpenConfirmation(false);  // Close the dialog after clearing
  };

  const handleClearChatCancel = () => {
    setOpenConfirmation(false);  // Close the dialog without clearing
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Paper elevation={4} sx={{ width: { xs: 500, md: 500 }, borderRadius: 4, mr: {xs:25,md:30} }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="./favicon.io" alt="Agent" sx={{ mr: 1 }} />
            <Typography variant="h6">Codezy</Typography>
          </Box>
          <InsertEmoticonIcon sx={{ color: '#00FF00' }} /> {/* Online status indicator */}
        </Box>

        <Box
          ref={chatContainerRef}
          sx={{ p: 2, height: '350px', overflowY: 'auto', backgroundColor: '#f5f5f5' }}
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
                    <Avatar src="https://via.placeholder.com/40" />
                  ) : (
                    <Avatar src="https://via.placeholder.com/40" />
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
                  <ListItemIcon>
                    <AttachFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={file} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton  onClick={() => setShowEmojiPicker((prev) => !prev)}>
              <InsertEmoticonIcon />
            </IconButton>
            {showEmojiPicker && (
              <Picker onSelect={handleEmojiClick} style={{ position: 'absolute', bottom: '60px', left: '10px' }} />
            )}
            <IconButton component="label">
              <AttachFileIcon />
              <input type="file" hidden onChange={handleFileChange} />
            </IconButton>

            {/* Clear Chat Button */}
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
                  sendMessage();
                }
              }}
             
            />
            
          </Box>
        </Box>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirmation}
        onClose={handleClearChatCancel}
        aria-labelledby="clear-chat-dialog-title"
        aria-describedby="clear-chat-dialog-description"
      >
        <DialogTitle id="clear-chat-dialog-title">{"Clear Chat History?"}</DialogTitle>
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
