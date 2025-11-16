'use client'

import $, { $elementless } from './dollarsign'

import NavButton from '@/components/generic/navbutton'
import LangSwitch from '@/components/generic/langswitch'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [ open, setOpen ] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <div className="min-h-full z-20">
      <div className="w-[350px] h-screen hidden md:block" />

      <div className={'fixed top-0 md:left-0 drop-shadow-[20px_-10px_20px_rgba(0,0,0,.75)] md:drop-shadow-none transition-transform -left-[400px] ' + (open ? 'translate-x-[400px]' : '')}>
        <div className="w-[350px] py-4 flex flex-col justify-between h-screen bg-[#0b0b14]">
          <span className="text-2xl"><$>Project Reproka</$></span>

          <div className="flex flex-col gap-2 pr-4">
            <NavButton link={'/'} icon={'home-6.svg'} content={<$>Home</$>} />
            <NavButton link={'/clock'} icon={'time-18.svg'} content={<$>Clock</$>} />
            <NavButton link={'/unit-conversions'} icon={'cursor-16.svg'} content={<$>Unit Conversions</$>} />
            <NavButton link={'/feature-plan'} icon={'calendar-9.svg'} content={<$>Feature Plan</$>} />
          </div>

          <div className="w-full flex flex-col gap-4 items-center mb-20 md:mb-0">
            <LangSwitch />

            <span>{<$>© Project Reproka 2025</$>}</span>
          </div>
        </div>
      </div>

      <button className="fixed md:hidden top-4 z-30 left-0 w-16 h-16 backdrop-blur-lg rounded-e-xl border-cyan-200 border border-l-0" onClick={handleToggle}>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="resources/icons/angel-right-thin.svg" 
            width={32}
            height={32}
            alt={$elementless('Open Menu')}
            className={'transition-transform ' + (open ? 'rotate-180' : '')}
          />
        </div>
      </button>
    </div>
  )
}
