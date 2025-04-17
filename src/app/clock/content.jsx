'use client'

import { useState, useEffect } from 'react'

import Clock from '@/components/clock/clock'
import Navbar from '@/components/generic/navbar'
import { gettext } from '@/globals/translations'

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
  
        <Clock language={language} />
      </div>
    </div>
  )
}
