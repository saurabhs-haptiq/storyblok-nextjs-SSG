import { storyblokEditable } from '@storyblok/react';
import React from 'react';

export const Feature = ({blok}) => {
    const {headline, content} = blok;
  return (
    <div 
    className='bg-white p-8 rounded-xl shadow'
    {...storyblokEditable(blok)}>
        <h2 className='font-bold text-3xl'>{headline}</h2>
        <p className='mt-6 text-lg'> {content}</p>
        
    </div>
  );
};
