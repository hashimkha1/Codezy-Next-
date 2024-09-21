"use client";
import React, { useState,useEffect, use } from "react";
import  { Suspense } from 'react';
import { HoverEffect } from "../ui/card-hover-effect";
import axios from 'axios';
import { Skeleton, Card, CardContent, Grid } from '@mui/material';

// Function to create a resource for Suspense
function fetchProjects() {
  let status = "pending";
  let result;
  let suspender = axios.get('http://localhost:8000/api/services')
    .then(response => {
      status = "success";
      result = response.data;
    })
    .catch(error => {
      status = "error";
      result = error;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

// Create a resource for projects
const projectResource = fetchProjects();

// Placeholder card skeletons
function CardSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="relative block p-2 h-full w-full">
        <div className="rounded-2xl h-full w-full p-4 bg-white border border-transparent dark:border-white/[0.2] relative z-20">
          <Skeleton variant="rectangular" height={180} />
          <div className="p-4">
            <Skeleton variant="text" height={32} width="80%" />
            <Skeleton variant="text" height={24} width="60%" style={{ marginTop: '16px' }} />
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

// Component that renders project cards
function ProjectsList() {
  const projects = projectResource.read();
  return <HoverEffect items={projects} />;
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* Suspense with fallback displaying card skeletons */}
      <Suspense fallback={<CardSkeletonLoader />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
// export const projects = [
//   {
//     title: "Web Development",
//     description:
//       "Our Website design is always responsiveand the kind of Website layout we design,Proudly reflects the nature of your Business.",
//     link: "/",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//     "Our specialty both Native & Hybrid Mobile Apps,Augmented Reality, Enterprise Mobility & more,For IOS, Android & Windows.",
//     link: "/",
//   },
//   {
//     title: "Custom ERP system",
//     description:
//       "We have vast experience in designing multiple ERP products including CRM,Delivery Management System, Warehouse Management System,Financials, Project Management, Payroll, Inventory, ERP Integration with eCommerce Store.",
//     link: "/",
//   },
//   {
//     title: "E-Commerce Development",
//     description:
//       "Our team develops eCommerce Stores with high level customizations, Theme Development, Module Development, API Integration, Payment Gateway Integration by using Laravel (PHP), Ruby on Rails, Woocommerce. ReactJS, AngularJS.",
//     link: "/",
//   },
//   {
//     title: "Quality Assurance & Finishing Projects",
//     description:
//       "Many clients come to us with incomplete apps which we finish off for them. If you have an app which needs completion then bring it to us, so it could be done within the deadlines. You will not need to worry about the quality.",
//     link: "/",
//   },
//   {
//     title: "UI/UX",
//     description:
//       "Save time and money by allowing us to build unique interactive features that will take your UI/UX design experience to a whole new level.",
//     link: "/",
//   },
// ];
