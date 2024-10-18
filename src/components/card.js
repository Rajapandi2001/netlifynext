import React from 'react';

const Card = ({ imageSrc }) => {
  return (
    <div className="w-full h-fullrounded-lg transition-all duration-300 ease-out flex items-center justify-center">
      <img
        src={imageSrc}
        alt="Card image"
        className="max-w-full max-h-full object-contain rounded-xl shadow-xl"
        draggable="false"
        style={{ userSelect: "none" }}
      />
    </div>
  );
};

export default Card;
