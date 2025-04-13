import Image from 'next/image'
import Link from 'next/link'

export default function NavButton({ content, link, icon }) {
  return (
    <Link href={link} className="flex flex-row items-start pl-4 py-2 gap-2 border-y border-r border-[#303053] hover:border-[#56568b] bg-[#111120] hover:bg-[#1e1e38] transition-colors">
      <Image src={'/icons/' + icon}
        width={32}
        height={32}
        alt="icon"
        />

      <span>{content}</span>
    </Link>
  )
}
