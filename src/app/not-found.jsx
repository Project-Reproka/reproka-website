import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '404 // Reproka Website'
}

export default function Home() {
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>404 - Page not found</span>
      
      <Image src="/overexposed.png"
        height="280"
        width="280"
        alt="Reproka"
        className="rounded-xl border-cyan-200 border-2 shadow-custom"
        />

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Lost? Return to our&nbsp;
        <Link href="/" className="underline text-cyan-200">homepage</Link>.
      </span>
    </div>
  )
}
