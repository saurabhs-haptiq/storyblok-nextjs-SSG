import { RecommendTours } from "@/components/RecommendTours";
import RecommendedTour from "@/components/RecommendTours/RecommendedTour";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import React from "react";

const fetchAllTours = async () => {
  const client = getStoryblokApi(); // Initialize the API client
  const response = await client.get(`cdn/stories/`, {
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  // console.log("RESPONSE:#### 4 ", response.data.stories);
  return response.data.stories; // Ensure the data is returned
};

const fetchTourPages = async () => {
  const client = getStoryblokApi(); // Initialize the API client
  const response = await client.get(`cdn/stories/tours`, {
    version:  process.env.NODE_ENV === "development" ? "draft" : "published", // Use "draft" or "published" based on your needs
  });

  // console.log("RESPONSE:#### 3 ", response.data.story);
  return response.data.story; // Ensure the data is returned
};

const ToursMainPage = ({ story, tours }) => {
  const { content: storyContent } = story;

  // console.log(tourContent)
  return (
    <div>
      <StoryblokComponent blok={storyContent} />

      <div className="grid md:grid-cols-2 container w-full mx-auto px-4 gap-8 py-16 ">
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour._uid} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const story = await fetchTourPages();
  const tours = await fetchAllTours();

  return {
    props: {
      story,
      tours,
    },
    revalidate: 3600, // revalidate every hour  //this is ISR
  };
}

export default ToursMainPage;
