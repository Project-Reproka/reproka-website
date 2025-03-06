import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Feature List // Reproka Website',
  description: 'todo'
}

export default function Home() {
  var features = [
    'Interactive countries map',
    'Unit conversions',
    'Clock and calendar (+ related utilities)',
    'Climate simulator',
    'And more!'
  ]

  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Feature Plan</span>

      <Image src="/overexposed.png"
        height="280"
        width="280"
        alt="Reproka"
        className="rounded-xl border-cyan-200 border-2 shadow-custom"
        />

      <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Our planned features include:
      </span>

      <div className="flex flex-col gap-2 items-center">
        {features.map(feature => 
          <span key={features.indexOf(feature)} className="p-2 px-6 w-full bg-[#06105a44] rounded-lg">
            {feature}
          </span>
        )}
      </div>

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Return to the&nbsp;
        <Link href="/" className="underline text-cyan-200">homepage</Link>.
      </span>
    </div>
  )
}
