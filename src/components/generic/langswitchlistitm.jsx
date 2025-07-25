import { langlist, gettext } from '@/globals/translations'

export default function LangSwitchListItm({ language, item, selected, select }) {
  function handleselect(e) {
    select(langlist.indexOf(item))
  }

  return (
    <div className="flex flex-row gap-2 items-center py-2 px-2 justify-between border-[#303053] bg-[rgba(127,127,255,2%)] border rounded-md transition-colors" style={{borderColor: (selected ? '#22ff77' : ''), background: (selected ? 'rgba(127,255,127,10%)' : '')}}>
      <span className="text-xl text-left ml-1">{item}</span>

      <button className="h-12 px-5 rounded-xl text-md text-center bg-[rgba(127,127,255,10%)]" onClick={handleselect}>{gettext('navbar.langswitch.select', language)}</button>
    </div>
  )
}
