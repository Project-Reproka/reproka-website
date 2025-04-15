import { gettext } from '@/globals/translations'

import Image from 'next/image'
import Link from 'next/link'

export default function NavButton({ language, content, link, icon }) {

  return (
    <Link href={link} className="flex flex-row items-start pl-6 py-2 gap-2 border-y border-r border-[#303053] hover:border-[#56568b] bg-[#111120] hover:bg-[#1e1e38] rounded-r -translate-x-2 hover:translate-x-0 transition-all">
      <Image src={'/resources/icons/' + icon}
        width={32}
        height={32}
        alt={gettext('navbar.btnalt', language)}
        />

      <span className="text-lg relative top-[2px]">{content}</span>
    </Link>
  )
}
