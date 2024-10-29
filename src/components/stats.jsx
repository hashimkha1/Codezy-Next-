'useClient'
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { AccessTime, Folder, SentimentSatisfiedAlt, ThumbUp } from '@mui/icons-material';

function Stats({props}) {
    const { bg, color } = props;
  const stats =[
    { icon: <AccessTime style={{ fontSize: 32, color:'white' }} />,value:2023,label:'Founded'},
    {icon: <Folder style={{ fontSize: 32 , color:'white'}} />,value:5,label:'Completed Projects'},
    {icon: <SentimentSatisfiedAlt style={{ fontSize: 32, color:'white' }} />,value:4,label:'Satisfied Clients'},
    {icon: <ThumbUp style={{ fontSize: 32, color:'white' }} />,value:3,label:'Positive Feedback'}
  ]
  stats.map((data,index)=>console.log(index))
  console.log(props)
  return (
  <>
    <Box 
    display= 'flex'
    justifyContent="space-around"
    alignItems="center"
    bgcolor="#333   "
    p={2}
    sx={{ gap: 4,height:400,background:bg}}
    >
     {stats.map((data,index)=>(
      <Box 
          key={index} 
          textAlign="center" 
          justifyContent="center" 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          color="#fff" 
          sx={{ transition: 'none' }}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#ffa500',
              width: 85,
              height: 85,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              marginBottom:4,
              '&:hover': {
                border: '5px solid #ffcc00',
                padding: '2px', // Yellow border on hover
                borderTopLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              },
              
            }}
          >
            {data.icon}
          </Paper>
        
        <Typography  variant="h4" component="div" sx={{color:color}} fontWeight="bold">
          {data.value}
        </Typography>
        <Typography variant="h7" component="div" color="#ffcc00">
          {data.label}
        </Typography>

      </Box>  
     ))}
    </Box>
    </>
  )
}

export default Stats