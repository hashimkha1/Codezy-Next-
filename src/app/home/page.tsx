"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import testImage from './test.jpg'; 

export default function HeroParallaxDemo() {
  return (
    <div style={{backgroundColor:'#121212' ,color: '#ffffff'}}>
    <HeroParallax products={products} />

    </div>
  );
}
export const products = [
  {
    title: "App development",
    link: "https://gomoonbeam.com",
    thumbnail:testImage,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:testImage,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:testImage,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:testImage,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:testImage,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:testImage,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:testImage,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:testImage,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:testImage,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:testImage,
  },
];
