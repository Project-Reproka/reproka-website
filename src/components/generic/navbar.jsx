import { langlist, text } from '@/globals/translations'

import NavButton from '@/components/generic/navbutton'

export default function Navbar({ language }) {
  const lang = langlist.indexOf(language)

  return (
    <div className="w-96 py-4 flex flex-col justify-between min-h-screen">
      <span className="text-2xl">{text.navbar.headertext[lang]}</span>

      <div className="flex flex-col gap-2">
        <NavButton language={lang} link={'/clock'} icon={'time-18.svg'} content={text.navbar.clock[lang]} />
        <NavButton language={lang} link={'/unit-conversions'} icon={'cursor-16.svg'} content={text.navbar.conversions[lang]} />
        <NavButton language={lang} link={'/feature-plan'} icon={'calendar-9.svg'} content={text.navbar.featureplan[lang]} />
      </div>

      {text.navbar.copyright[lang]}
    </div>
  )
}
