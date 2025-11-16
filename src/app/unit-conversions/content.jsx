'use client'

import $ from '@/components/generic/dollarsign'
import Navbar from '@/components/generic/navbar'
import Converter from '@/components/conversions/converter'

export default function ConversionsContent() {
  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar />
        
      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}><$>Unit Conversions</$></span>

        <Converter />
      </div>
    </div>
  )
}
