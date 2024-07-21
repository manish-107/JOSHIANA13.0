import React from "react";

const Marquee = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal z-40 pointer-events-none [mask-image:_radial-gradient(circle,_transparent_10%,_#000000_100%)]"></div>
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <div className="flex space-x-8 animate-marquee">
          <p className="text-xl font-semibold text-white">Company A</p>
          <p className="text-xl font-semibold text-white">Company B</p>
          <p className="text-xl font-semibold text-white">Company C</p>
          <p className="text-xl font-semibold text-white">Company D</p>
          <p className="text-xl font-semibold text-white">Company E</p>
          <p className="text-xl font-semibold text-white">Company F</p>
          <p className="text-xl font-semibold text-white">Company G</p>
          <p className="text-xl font-semibold text-white">Company H</p>
        </div>
        <div className="flex space-x-8 animate-marquee">
          <p className="text-xl font-semibold text-white">Company A</p>
          <p className="text-xl font-semibold text-white">Company B</p>
          <p className="text-xl font-semibold text-white">Company C</p>
          <p className="text-xl font-semibold text-white">Company D</p>
          <p className="text-xl font-semibold text-white">Company E</p>
          <p className="text-xl font-semibold text-white">Company F</p>
          <p className="text-xl font-semibold text-white">Company G</p>
          <p className="text-xl font-semibold text-white">Company H</p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
