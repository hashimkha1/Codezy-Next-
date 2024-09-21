"use client";
import React, { useState,useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import axios from "axios";

function Navbar({ className }: { className?: string }) {
  const [services,setServices] = useState([])
  const [active, setActive] = useState();
  useEffect(()=>{
    async function getService (){
      const response = await axios.get('http://localhost:8000/api/services') 
      console.log(response.data)
      setServices(response.data)
    }
   getService()
  },[])
  
 
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/web-dev">Home</HoveredLink>
        <HoveredLink href="/web-dev">Our Team</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
          {services.map((item) => (
            <HoveredLink href={item.link} key={item._id}>
              {item.title}
            </HoveredLink>
          ))}

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Codanalytics</HoveredLink>
            <HoveredLink href="/interface-design">Alignav</HoveredLink>
            <HoveredLink href="/seo">Multi-Tenant ERP with Frontly.ai</HoveredLink>
            <HoveredLink href="/branding">Mediabuying Toolbox Development</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/web-dev">Hire Us</HoveredLink>
      </Menu>
    </div>
  );

}

export default Navbar