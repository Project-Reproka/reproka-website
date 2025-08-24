'use client'

import { useState, useEffect } from 'react'

import { gettext, langlist } from '@/globals/translations'
import LangSwitchListItm from '@/components/generic/langswitchlistitm'

export default function LangSwitch({ setlg, language }) {
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)
  const [list, setList] = useState(langlist)

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
    setSelected(language)
  }

  function handlequery(e) {
    var l = []

    langlist.forEach(item => {
      if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
        l.push(item)
      }
    })

    setList(l)
  }

  useEffect(() => {
    setSelected(language)
  }, [language])

  return (
    <div className="w-full flex flex-col gap-2 items-center text-sm">
      <span className="w-10/12 bg-[rgba(127,127,255,10%)] px-2 py-2 rounded-lg">
        {langlist[language]}
      </span>

      <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-[#000000aa] text-white" style={{display: (open ? 'flex' : 'none')}}>
        <div className="w-5/6 md:w-1/2 h-2/3 md:h-5/6 mb-10 md:mb-0 backdrop-blur-md bg-[#0b0b1455] p-8 rounded-3xl border-[#303053] border flex flex-col gap-8">
          <div className="w-full h-12 flex items-center justify-between text-3xl">
            <span>{gettext('navbar.langswitch.langs', language)}</span>

            <button className="w-12 h-12 rounded-xl text-center bg-[rgba(127,127,255,10%)]" onClick={handleclose}>
              ×
            </button>
          </div>

          <input className="w-full h-12 text-lg rounded-xl p-2 px-4 bg-[rgba(127,127,255,10%)]" placeholder={gettext('navbar.langswitch.search', language)} type="text" onChange={handlequery} />

          <div className="w-full h-[350px] text-xl p-3 flex flex-col flex-1 gap-2 overflow-y-scroll rounded-l-md border-[#303053] border">
            {list.map(item => 
              <LangSwitchListItm key={langlist.indexOf(item)} language={language} item={item} selected={selected == langlist.indexOf(item)} select={setSelected} />
            )}
          </div>

          <button className="w-full h-12 py-2 rounded-xl text-center bg-[rgba(127,127,255,10%)]" onClick={handlechange}>{gettext('navbar.langswitch.saveexit', language)}</button>
        </div>
      </div>

      <button onClick={handleopen} className="hover:cursor-pointer w-10/12 bg-[#111120] hover:bg-[#1e1e38] px-2 py-2 rounded-lg border border-[#303053] hover:border-[#56568b] transition-colors">{gettext('navbar.langswitch.changelang', language)}</button>
    </div>
  )
}
