"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Typography } from "@mui/material";
import { Boxes } from "./ui/background-boxes";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <div className="mb-12 text-center px-4 lg:px-48">
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 30, md: 35 },
            fontWeight: 700,
            boxShadow: "50px",
            fontFamily: "revert-layer",
            mb: { xs: 4, md: 6 },
            color: "white", // Ensure the title is visible
          }}
        >
          What our clients say about us
        </Typography>

        <p
          className="text-sm sm:text-base lg:text-lg mx-auto"
          style={{
            maxWidth: "90%",
            padding: "0 16px",
            color: "white", // Ensure the paragraph is visible
          }}
        >
          We thank all our awesome Clients! There are hundreds of happy clients!
          Let's see what others say about Rapidzz Solutions!
        </p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <Boxes />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
