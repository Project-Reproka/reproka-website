'use client'

import $ from '@/components/generic/dollarsign'

import Clock from '@/components/clock/clock'
import Navbar from '@/components/generic/navbar'

export default function ClockContent() {
  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar />

      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-16 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}><$>Reproka Clock</$></span>
  
        <Clock />
      </div>
    </div>
  )
}
