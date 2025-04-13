import { langlist, text } from '@/globals/translations'

import NavButton from '@/components/generic/navbutton'

export default function Navbar({ language }) {
  const lang = langlist.indexOf(language)

  return (
    <div className="w-96 py-4 flex flex-col justify-between min-h-screen">
      <span className="text-2xl">{text.headertext[lang]}</span>

      <div className="flex flex-col gap-2">
        <NavButton link={'/clock'} icon={'time-18.svg'} content={text.clock[lang]} />
        <NavButton link={'/unit-conversions'} icon={'cursor-16.svg'} content={text.conversions[lang]} />
      </div>

      {text.copyright[lang]}
    </div>
  )
}
