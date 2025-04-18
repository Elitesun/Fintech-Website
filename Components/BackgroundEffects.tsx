import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-40">
      <div className="absolute top-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
    </div>
  );
};

export default BackgroundEffects;