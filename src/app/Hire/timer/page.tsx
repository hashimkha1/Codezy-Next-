"use client";
import React, { useEffect, useState, useContext } from 'react';
import { DescriContext } from '@/components/context/description';
import { Button, Typography, Box, Paper, Container } from '@mui/material';
import Link from 'next/link';

const Hire = () => {
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

    return (
        <Container maxWidth="md" sx={{ paddingY: 4 }}>
           
            <Paper elevation={0} sx={{ padding: 20, border: 'none', backgroundColor: '#f5f5f5' }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ color: '#3f51b5' }}>
                    Meeting Details
                </Typography>
                
                <Box sx={{ marginBottom: 3 }}>
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
                </Box>
            </Paper>
        </Container>
    );
};

export default Hire;

