"use client";
import React, { useState,useEffect, useContext } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import axios from "axios";
import { DescriContext } from "./context/description";

function Navbar({ className }: { className?: string }) {
  
  const [active, setActive] = useState();
 
  
 
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/web-dev">Our Team</HoveredLink>
        <HoveredLink href="/services">Services</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
          {services.map((item) => (
            <HoveredLink href='/services/[web]' key={item._id}>
              {item.title}
            </HoveredLink>
          ))}

          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Codanalytics</HoveredLink>
            <HoveredLink href="/interface-design">Alignav</HoveredLink>
            <HoveredLink href="/seo">Multi-Tenant ERP with Frontly.ai</HoveredLink>
            <HoveredLink href="/branding">Mediabuying Toolbox Development</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/hire">Hire Us</HoveredLink>
      </Menu>
    </div>
  );

}

export default Navbar