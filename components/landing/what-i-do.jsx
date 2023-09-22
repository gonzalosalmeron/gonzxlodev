import Image from 'next/image'
import React from 'react'

function WhatIDo() {
  return (
    <section id='what-i-do' className='w-full max-w-7xl mx-auto py-40 flex items-top justify-between px-4 gap-6'>
      <div className='font-epilogue text-4xl font-extrabold text-white md:text-5xl'>
        <div className='flex items-center'>
          <p>Get to know me</p>
          <div className='relative pt-1'>
            <Image
              src='/img/web/bulb.svg'
              alt='bulb'
              className='z-10 ml-3 w-14 pb-4'
              width='20'
              height='20'
            />
            <div className='absolute right-5 top-5 h-4 w-4 animate-blink'></div>
          </div>
        </div>
        <p>a little bit more</p>
      </div>
      <div className='text flex flex-col gap-4 text-lg font-medium text-gray-50 md:max-w-[50%] md:pt-10'>
        <p><span className='text-zinc-600'>{`<p>`}</span> I have been a software developer for {new Date().getFullYear() - 2021} years. I am currently working at Enerclic Innovatio. <span className='text-zinc-600'>{`</p>`}</span></p>
        <p><span className='text-zinc-600'>{`<p>`}</span> So far I have focused on web development as it is what I am most passionate about and I have several projects in which I have worked myself from start to finish, covering both design and internal development. <span className='text-zinc-600'>{`</p>`}</span></p>
        <p><span className='text-zinc-600'>{`<p>`}</span> I consider myself a very curious person and {`that's`} why I also love to test technologies like Flutter, React Native, Electron, etc... <span className='text-zinc-600'>{`</p>`}</span></p>
      </div>
    </section>
  )
}

export default WhatIDo