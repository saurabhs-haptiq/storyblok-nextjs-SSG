import Link from "next/link";
import React from "react";

const RecommendedTour = ({ story }) => {
  console.log("TOUR $$$$$$$$", story);
  return (
    <div className="bg-white rounded shadow">
      <img
      className="aspect-video object-cover w-full"
      src={story.content.main_img.filename} alt="" />
      <div className="p-8"> 
        <div className="text-lg font-bold ">
          <h3>{story.content.name}</h3>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">{story.content.location}</p>
        <Link
        className="text-bold underline mt-8 font-bold text-base block"
        href={`/${story.full_slug}`}>View Tour</Link>
      </div>
    </div>
  );
};

export default RecommendedTour;
