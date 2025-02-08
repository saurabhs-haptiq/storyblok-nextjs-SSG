import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export const getStaticPaths = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories`, {
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  const paths = response.data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return {
    paths,
    fallback: "blocking"
  }
};

// Fetching the JSON
const fetchTourData = async (slug) => {
  const client = getStoryblokApi(); // Initialize the API client
  const response = await client.get(`cdn/stories/tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published", // Use "draft" or "published" based on your needs
  });

  console.log("RESPONSE:#### 3 ", response.data.story);
  return response.data.story; // Ensure the data is returned
};

// The component that renders the fetched data
const TourHomePage = ({ story }) => {
  console.log("STORY", story.content);
  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
};

// fethces one time at build time and pregenerte all the required pages
export const getStaticProps = async (context) => {
  const { slug } = context.params;

  console.log("@@@@@@@@@@1", context.params); //contains only slug

  console.log("#############2 : ", slug); //fetched slug form context.params

  // Fetch the story data
  const story = await fetchTourData(slug);

  return {
    props: {
      story, // Pass the story as a prop to the component
    },
  };
};

export default TourHomePage;
