'use client'

import Image from 'next/image'

import $, { $elementless } from '@/components/generic/dollarsign'
import Navbar from '@/components/generic/navbar'

export default function HomeContent() {
  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar />

      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          <$>Project Reproka</$>
        </span>

        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt={$elementless('Reproka')}
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          <$>This website is currently under construction.</$>
          <br />
          <$>Check back later and I'm sure there'll be something new here!</$>
        </span>
      </div>
    </div>
  )
}
