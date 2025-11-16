'use client'

import Image from 'next/image'

import $ from '@/components/generic/dollarsign'
import Navbar from '@/components/generic/navbar'

export default function Content404() {
  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar />

      <div className="w-full px-16 flex flex-col items-center justify-center gap-9 text-center">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}><$>404 - Page Not Found</$></span>

        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt={$elementless('Reproka')}
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          <$>The page you requested could not be found.</$>
          <br/>
          <$>Lost? Return to our homepage via the sidebar to the left.</$>
        </span>
      </div>
    </div>
  )
}
