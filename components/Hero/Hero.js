import React from 'react'

export const Hero = ({blok}) => {
    // console.log("HERo", blok)
  return (
    <>
        <section className='px-4 pt-32 pb-16 container mx-auto w-full'>
            <h2 className='text-center text-5xl md:text-7xl font-bold'>{blok.headline}</h2>
            <p className='text-center text-xl mt-8'>{blok.content}</p>
        </section>
    </>
  )
}

