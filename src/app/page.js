import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center">
      <span className="text-6xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>Reproka Website</span>
      <Image src="/overexposed.png"
        height="280"
        width="280"
        alt="Reproka"
        className="rounded-xl border-cyan-200 border shadow-custom"
        />

      <span className="text-xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>
        This website is currently under construction. <br />
        Check back later and I&apos;m sure there&apos;ll be something new here!
      </span>
    </div>
  );
}
