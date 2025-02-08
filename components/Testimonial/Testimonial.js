import React from "react";

export const Testimonail = ({ blok }) => {
  const { name, comment } = blok;
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <p className="text-xl leading-relaxed text-gray-700">{comment}</p>
      <h3 className="font-semibold text-lg mt-6">{name}</h3>
    </div>
  );
};
