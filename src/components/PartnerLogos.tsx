
import React from 'react';

const PartnerLogos = () => {
  return (
    <div className="flex justify-center items-center space-x-16 mt-20">
      <div className="text-white flex items-center">
        <div className="bg-white/10 rounded-full p-2 mr-1">
          <span className="font-bold text-xs">R</span>
        </div>
        <div className="bg-white/10 rounded-full p-2">
          <span className="font-bold text-xs">D</span>
        </div>
        <span className="text-[10px] ml-1 opacity-80">RECORDING STUDIOS</span>
      </div>
      
      <div className="text-white">
        <span className="text-xl font-bold tracking-tight">encore</span>
        <span className="text-[10px] tracking-widest block text-center mt-1">PRODUCTIONS</span>
      </div>
      
      <div className="text-white font-serif italic text-2xl">
        Romantic
      </div>
    </div>
  );
};

export default PartnerLogos;
