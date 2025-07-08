import React from 'react';
import CVN from '../assets/CVN.webp';
import RSU from '../assets/RSU.png';
import UNP from '../assets/UNP.webp';

const logos = [CVN, RSU, UNP];

export default function TrustedBy() {
  return (
    <div className="flex items-center bg-white/80 border border-gray-200 rounded-full shadow-sm px-4 py-1 w-fit ml-8 md:ml-16">
      <div className="flex -space-x-3">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="University logo"
            className="w-8 h-8 rounded-full border-2 border-white shadow object-cover bg-white"
            style={{ zIndex: logos.length - idx }}
          />
        ))}
      </div>
      <span className="ml-4 text-gray-700 font-medium text-sm whitespace-nowrap">
        Used by over 2,000 students
      </span>
    </div>
  );
}
