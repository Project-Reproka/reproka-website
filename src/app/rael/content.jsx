'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from '@/components/generic/navbar'

export default function RaelContent() {
  var [language, setLanguage] = useState(0)

  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])
  
  var te1=<span className="text-5xl">super probably placeholder text</span>
  var te2=<img src="https://i.ytimg.com/vi/201EZ5ItSm4/maxresdefault.jpg" />

  return (
    <div className="min-h-screen w-full flex flex-row items-center gap-9 text-center">
      <Navbar language={language} setlg={setLanguage} />

      <div className="px-16 flex flex-col items-center justify-center gap-9 text-center">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Reproka Website</span>
        
        <Image src="/resources/images/overexposed.png"
          height="280"
          width="280"
          alt="Reproka"
          className="rounded-xl border-cyan-200 border-2 shadow-custom"
          />

        <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
          This website is currently under construction. <br />
          Check back later and I&apos;m sure there&apos;ll be something new here!
        </span>
      </div>
    </div>
  )
}
