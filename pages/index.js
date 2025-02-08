import { getStoryblokApi, StoryblokComponent } from "@storyblok/react"
 

const fetchHomePage = async () => {
  const client = getStoryblokApi();  // Initialize the API client
  const response = await client.get(`cdn/stories/home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: ['recommended_tours.tours'],
  });

  return response.data.story;  // Ensure the data is returned
};  



export default function Home({story}) {
  // console.log("STORY:HOME #### ",story.content.blocks);

  return (
    <StoryblokComponent blok={story.content} />
  )
}
 
export async function getStaticProps() {

  const story = await fetchHomePage();
 
  return {
    props: {
      story,
    },
    revalidate: 3600, // revalidate every hour  //this is ISR
  };
}
