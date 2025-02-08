import "@/styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import {components} from "../components/StoryblokComponents" 
import Link from "next/link";



//custom cacheing
const cachedFetch = (input, init) => {
  return fetch(input, {
    ...init, // Keep all original options
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
  });
};


storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions:{
    fetch: cachedFetch,
  }
});
 



export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <h1>Layout</h1> */}
    <header>
      <nav className="container mx-auto px-4 w-full py-8 flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/tours">Tours</Link>
      </nav>
    </header>
    <Component {...pageProps} />
    </>
  )
}


