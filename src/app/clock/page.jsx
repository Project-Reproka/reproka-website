import Image from 'next/image'
import Link from 'next/link'

import Clock from '@/components/generic/clock'

export const metadata = {
  title: 'Clock // Reproka Website',
  description: 'A simple date/time clock following the Reproka time units.'
}

export default function ClockPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Reproka Clock</span>
    
      <Image src="/resources/images/overexposed.png"
        height="280"
        width="280"
        alt="Reproka"
        className="rounded-xl border-cyan-200 border-2 shadow-custom"
        />
 
      <Clock />

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Return to the&nbsp;
        <Link href="/" className="underline text-cyan-200">homepage</Link>.
      </span>
    </div>
  )
}
