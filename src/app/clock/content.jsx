'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Clock from '@/components/clock/clock'
import Navbar from '@/components/generic/navbar'
import { gettext, number } from '@/globals/translations'

export default function ClockContent() {
  var [language, setLanguage] = useState(0)
  
  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])

  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar language={language} setlg={setLanguage} />

      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>{gettext('clock.title', language)}</span>

        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt={gettext('general.planetname', language)}
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />
  
        <Clock />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          {gettext('clock.return', language)}
        </span>
      </div>
    </div>
  )
}