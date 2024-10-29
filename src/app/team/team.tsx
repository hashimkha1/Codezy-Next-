"use client";
import React, { useState } from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";


const people = [
  {
    id: 1,
    name: "Mehboob Ali ",
    designation: "CEO of Codezy",
    image: "/images/chatbot.jpeg",
    
    
  },
  {
    id: 2,
    name: "Robert Jhon ",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3534&q=80",
  },
];

const Modal = ({ member, onHover }) => (
  <div
    className="absolute bg-white p-4 rounded-lg shadow-lg w-40 text-center border border-gray-200"
    style={{ top: "-100px", left: "50%", transform: "translateX(-50%)" }} // Position above the member
    onMouseEnter={onHover} // Trigger tooltip display on hover
  >
    <h2 className="text-lg font-bold">{member.name}</h2>
    <p className="text-gray-600">{member.designation}</p>
    
    {/* <span className="text-xs text-gray-500 mt-2">use client</span> */}
  </div>
);

export function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Our Team</h1>
      <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
        {people.map((member) => (
          <div
            key={member.id}
            onMouseEnter={() => setHoveredMember(member)}
            onMouseLeave={() => setHoveredMember(null)}
            className="cursor-pointer p-2 flex flex-col items-center relative"
          >
            {/* Modal always positioned above each team member */}
            {hoveredMember === member && <Modal member={member} />}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-2"
            />
            <div className="text-center">
              <h2 className="font-semibold">{member.name}</h2>
           
            </div>
            {/* Show designation as tooltip on hover */}
            {hoveredMember === member && (
              <AnimatedTooltip
                className="absolute z-10 bg-white border border-gray-300 rounded shadow-md p-2 text-sm text-center"
                style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
              >
                {member.designation}
              </AnimatedTooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}