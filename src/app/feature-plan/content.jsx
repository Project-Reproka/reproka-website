'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { gettext } from '@/globals/translations'
import Navbar from '@/components/generic/navbar'

export default function FeaturePlanContent() {
  var [language, setLanguage] = useState(0)
  
  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])

  var features = [
    gettext('plan.interactivemap', language),
    gettext('plan.climatesim', language),
    gettext('plan.andmore', language)
  ]

  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar language={language} setlg={setLanguage} />
    
      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Feature Plan</span>

        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt={gettext('general.planetname', language)}
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          {gettext('plan.featuresheader', language)}
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
