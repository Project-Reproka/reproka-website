'use client'

import Image from 'next/image'

import $, { $elementless } from '@/components/generic/dollarsign'
import Navbar from '@/components/generic/navbar'

export default function FeaturePlanContent() {
  var features = [
    <$>Interactive region map</$>,
    <$>Climate simulator</$>,
    <$>And more!</$>
  ]

  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar />
    
      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}><$>Feature Plan</$></span>

        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt={$elementless('Reproka')}
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          <$>Our planned features include:</$>
        </span>

        <div className="flex flex-col gap-2 items-center">
          {features.map(feature => 
            <span key={features.indexOf(feature)} className="p-2 px-6 w-full bg-[#06105a44] rounded-lg">
              {feature}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
