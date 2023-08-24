import React from 'react'

export default function CoolButton({text = 'Cool Button', href = '#', background = 'bg-yellow-400', textColor = "text-black", width = "inline-flex", darkMode = true}) {
  return (
    <a href={href} 
      className={`${background} border  ${textColor} font-semibold text-[17px] px-5 py-3.5 rounded-full 
        hover:-translate-y-0.5 hover:-translate-x-0.5 duration-100 inline-flex ${width} ${!darkMode 
          ? 'shadow-[3px_3px_#282825] hover:shadow-[5px_5px_#282825] border-[#282825]'
          : 'shadow-[3px_3px_#FFFFFF] hover:shadow-[5px_5px_#FFFFFF] border-[#FFFFFF]'}
          `}><p className='w-full text-center'>{text}</p></a>
  )
}
