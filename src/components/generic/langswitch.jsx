'use client'

import { useState, useEffect } from 'react'

import { gettext, langlist } from '@/globals/translations'
import LangSwitchListItm from '@/components/generic/langswitchlistitm'

export default function LangSwitch({ setlg, language }) {
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)

  function handlechange(e) {
    setlg(selected)
    localStorage.setItem('lang', selected)

    setOpen(false)
  }

  function handleclose() {
    setOpen(false)
  }

  function handleopen() {
    setOpen(true)
  }

  useEffect(() => {
    setSelected(language)
  }, [language])

  return (
    <div className="w-full flex flex-col gap-2 items-center text-sm">
      <span className="w-10/12 bg-[rgba(127,127,255,10%)] px-2 py-2 rounded-lg">
        {langlist[language]}
      </span>

      <div className="fixed flex items-center justify-center top-0 left-0 z-20 w-full h-full bg-[#000000aa] text-white" style={{display: (open ? 'flex' : 'none')}}>
        <div className="w-1/2 backdrop-blur-md bg-[#0b0b1433] p-8 rounded-3xl border-[#303053] border flex flex-col gap-8">
          <div className="w-full h-12 flex items-center justify-between text-2xl">
            <span>{gettext('navbar.langswitch.langs', language)}</span>

            <button className="w-12 h-12 rounded-xl text-center bg-[rgba(127,127,255,10%)]" onClick={handleclose}>
              ×
            </button>
          </div>

          <div className="w-full h-[350px] flex flex-col gap-2 overflow-scroll">
            {langlist.map(item => 
              <LangSwitchListItm key={langlist.indexOf(item)} language={language} item={item} selected={selected == langlist.indexOf(item)} select={setSelected} />
            )}
          </div>

          <button className="w-full h-12 rounded-xl text-center bg-[rgba(127,127,255,10%)]" onClick={handlechange}>{gettext('navbar.langswitch.saveexit', language)}</button>
        </div>
      </div>

      <button onClick={handleopen} className="hover:cursor-pointer w-10/12 bg-[#111120] hover:bg-[#1e1e38] px-2 py-2 rounded-lg border border-[#303053] hover:border-[#56568b] transition-colors">{gettext('navbar.langswitch.changelang', language)}</button>
    </div>
  )
}
