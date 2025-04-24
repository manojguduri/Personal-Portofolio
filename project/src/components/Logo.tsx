import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="\images\logo.png" 
        alt="Logo" 
        className="w-9 h-8 object-cover"
      />
      <span className="text-[#BFA181] font-bold text-xl">Manoj Kumar</span>
    </div>
  );
};

export default Logo;