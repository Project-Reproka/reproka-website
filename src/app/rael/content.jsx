'use client'

import { useState, useEffect } from 'react'

import Navbar from '@/components/generic/navbar'

export default function RaelContent() {
  var [language, setLanguage] = useState(0)

  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])
  
  return (
    <div className="min-h-screen w-full flex flex-row items-center gap-9 text-center">
      <Navbar language={language} setlg={setLanguage} />

      <div>
        <span className="text-6xl">super probably placeholder text</span>
        <img src="https://i.ytimg.com/vi/201EZ5ItSm4/maxresdefault.jpg" />
      </div>
    </div>
  )
}
