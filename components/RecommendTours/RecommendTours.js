import React from "react";
import RecommendedTour from "./RecommendedTour";

export const RecommendTours = ({ blok }) => {
  console.log("********", blok);
  const { headline } = blok;
  return (
    <section className="py-16 container mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{headline}</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {blok.tours.map((tour) => (
          <RecommendedTour story={tour} />
        ))}
      </div>
    </section>
  );
};

export default RecommendTours;
