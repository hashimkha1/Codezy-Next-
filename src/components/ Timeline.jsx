import Image from "next/image";
import {React,use,useState} from "react";
import styled from "styled-components";
import { Timeline } from "@/components/ui/timeline";
import { Typography, Modal, Box,Button } from "@mui/material";

// Styled-components for the image hover effect
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:hover img {
    filter: brightness(50%);
    transition: all 0.3s ease-in-out;
    cursor:pointer
  }

  &:hover .hover-text {
    opacity: 1;
  }
`;
const HoverText = styled.div`
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 24px;
font-weight: bold;
opacity: 0;
transition: opacity 0.3s ease-in-out;
`

export function TimelineDemo() {
  const [openModel,setOpenModel] = useState(false);
  const handleOpen= ()=>{
    setOpenModel(true)
  }
  const handleClose = ()=>{
    console.log('closing')
    setOpenModel(false)
  }
 
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Typography variant="h2" style={{ fontSize: 30, marginBottom: 10 }}>
              Alignav
            </Typography>
            <a onClick={handleOpen}>
              <ImageWrapper>
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={400}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
                <HoverText className="hover-text">Alignav</HoverText>
              </ImageWrapper>
            </a>
            <Typography variant="h2" style={{ fontSize: 30, marginBottom: 10 }}>
              Alignav
            </Typography>
            <a  onClick={handleOpen}>
              <ImageWrapper>
                
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={400}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
              </ImageWrapper>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Typography variant="h2" style={{ fontSize: 30, marginBottom: 10 }}>
              Alignav
            </Typography>
            <a onClick={handleOpen}>
              <ImageWrapper>
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={400}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
                <HoverText className="hover-text">Alignav</HoverText>
              </ImageWrapper>
            </a>
           
         
            <a onClick={handleOpen}>
              <ImageWrapper>
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={400}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
                <HoverText className="hover-text">Alignav</HoverText>
              </ImageWrapper>
            </a>
          
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
      <Modal open={openModel} onClick={handleClose} >
        <Box
          p={4}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: 24,
            outline: "none",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Project Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            Here, you can put the content you want to show inside the modal,
            such as project details, additional images, etc.
          </Typography>

          {/* Additional images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="image-wrapper">
              <a>
              <ImageWrapper>
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
                <HoverText className="hover-text">Alignav</HoverText>
              </ImageWrapper>
              </a>
            </div>
            <div className="image-wrapper">
             <a >
              <ImageWrapper>
                <Image
                  src="/images/alignav.png"
                  alt="startup template"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  className="rounded-lg object-cover shadow-md"
                  style={{borderRadius:10}}
                />
                <HoverText className="hover-text">Alignav</HoverText>
              </ImageWrapper>
              </a>
            </div>
          </div>

          <Typography variant="body2" mt={2}>
            You can add descriptions or more information here.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
