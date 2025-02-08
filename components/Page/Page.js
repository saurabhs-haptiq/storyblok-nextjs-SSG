import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import React from 'react'

export const Page = ({ blok }) => (
    <main {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
      ))}
    </main>
  );

