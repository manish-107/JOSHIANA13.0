import React from "react";

export const BentoGrid = ({ className, children }) => (
  <div
    className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </div>
);

export const BentoGridItem = ({ className, title, description, image }) => (
  <div
    className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-black border border-transparent flex flex-col items-center ${className}`}
  >
    <div className="w-full h-72 rounded-t-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 mb-4 flex items-center justify-center">
      {image && (
        <img
          src={image}
          alt={title || "Image"}
          className="w-full h-72 object-cover" // Adjust width and height
        />
      )}
    </div>
    <div className="text-center">
      <div className="font-sans font-bold text-white mb-2">{title}</div>
      <div className="font-sans font-normal text-gray-300 text-xs">
        {description}
      </div>
    </div>
  </div>
);
