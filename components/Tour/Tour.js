import React from 'react'
import { renderRichText } from '@storyblok/react';

export const Tour = ({blok}) => {
    console.log("TOUR BLOG $$$$$$$$$$$$$$", blok)
    const {name, main_img, introduction} = blok;
  return (
    <main className='container mx-auto px-4 w-full pt-32 pb-16'>
      <h2 className='text-3xl md:text-5xl font-bold'>{name}</h2>
      <img className='mt-12' src={main_img.filename} alt={`${blok.location}.image`} />
      <p className='text-lg md:text-2xl mt-12 md:leading-relaxed'>{introduction}</p>

      <div
      className='prose md:prose-lg mt-16 max-w-none'
      dangerouslySetInnerHTML={{__html: renderRichText(blok.body)}}
      >

      </div>
    </main>
  )
}
