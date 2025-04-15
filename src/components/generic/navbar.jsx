import { gettext } from '@/globals/translations'

import NavButton from '@/components/generic/navbutton'
import LangSwitch from '@/components/generic/langswitch'

export default function Navbar({ language, setlg }) {
  return (
    <div className="w-[350px] py-4 flex flex-col justify-between min-h-screen bg-[#0b0b14]">
      <span className="text-2xl">{gettext('navbar.headertext', language)}</span>

      <div className="flex flex-col gap-2 pr-4">
        <NavButton language={language} link={'/'} icon={'home-6.svg'} content={gettext('navbar.home', language)} />
        <NavButton language={language} link={'/clock'} icon={'time-18.svg'} content={gettext('navbar.clock', language)} />
        <NavButton language={language} link={'/unit-conversions'} icon={'cursor-16.svg'} content={gettext('navbar.conversions', language)} />
        <NavButton language={language} link={'/feature-plan'} icon={'calendar-9.svg'} content={gettext('navbar.featureplan', language)} />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <LangSwitch setlg={setlg} language={language} />

        <span>{gettext('navbar.copyright', language)}</span>
      </div>
    </div>
  )
}
