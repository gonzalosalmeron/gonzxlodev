import React from 'react'

export default function Navbar() {
  const navbarLinks = [
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'What I do',
      href: '#',
    },
    {
      name: 'My Work',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    }
  ]

  return (
    <nav role='navigation' className='flex justify-between items-center max-w-7xl w-full mx-auto px-responsive py-6 text-orange-50'>
      <p className='font-semibold text-lg'>~/ <span className='animate-cursor-blink'>|</span> gonzxlo.dev</p>
      
      <div className='flex items-center gap-3'>
        {navbarLinks.map((link, i) => (
          <a key={i} href={link.href} className='hover:border-b border-orange-50 tex'>{link.name}</a>
        ))}
      </div>
    </nav>
  )
}