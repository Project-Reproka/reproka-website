import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Home // Reproka Website'
}

export default function Home() {
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Reproka Website</span>

      <Image src="/overexposed.png"
        height="280"
        width="280"
        alt="Reproka"
        className="rounded-xl border-cyan-200 border-2 shadow-custom"
        />

      <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
        This website is currently under construction. <br />
        Check back later and I&apos;m sure there&apos;ll be something new here!
      </span>

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        In the meantime, check out our&nbsp;
        <Link href="/feature-plan" className="underline text-cyan-200">planned feature list</Link>. (Has links to completed features.)
      </span>
    </div>
  )
}
