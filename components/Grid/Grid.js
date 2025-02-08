import { StoryblokComponent } from "@storyblok/react";
import React from "react";

export const Grid = ({ blok }) => {
  if (!blok) return null;
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="md:text-4xl text-3xl font-bold">{blok.headline}</h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.items.map((feature) => (
            <StoryblokComponent blok={feature} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
