'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Clock from '@/components/clock/clock'
import Navbar from '@/components/generic/navbar'
import { gettext } from '@/globals/translations'

export default function ClockContent() {
  var [language, setLanguage] = useState(0)
  
  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])

  const seasonNames = [
    [gettext("clock.smonthnames.bsp", language)],
    [gettext("clock.smonthnames.esp", language)],
    [gettext("clock.smonthnames.bsu", language)],
    [gettext("clock.smonthnames.esu", language)],
    [gettext("clock.smonthnames.bhr", language)],
    [gettext("clock.smonthnames.ehr", language)],
    [gettext("clock.smonthnames.bwr", language)],
    [gettext("clock.smonthnames.ewr", language)]
  ];

  const lunarNames = [
    [gettext("clock.lmonthnames.1", language)],
    [gettext("clock.lmonthnames.2", language)],
    [gettext("clock.lmonthnames.3", language)],
    [gettext("clock.lmonthnames.4", language)],
    [gettext("clock.lmonthnames.5", language)],
    [gettext("clock.lmonthnames.6", language)],
    [gettext("clock.lmonthnames.7", language)],
    [gettext("clock.lmonthnames.8", language)],
    [gettext("clock.lmonthnames.9", language)],
    [gettext("clock.lmonthnames.10", language)],
    [gettext("clock.lmonthnames.11", language)],
    [gettext("clock.lmonthnames.12", language)],
    [gettext("clock.lmonthnames.13", language)],
    [gettext("clock.lmonthnames.14", language)],
    [gettext("clock.lmonthnames.15", language)],
    [gettext("clock.lmonthnames.16", language)],
    [gettext("clock.lmonthnames.17", language)],
    [gettext("clock.lmonthnames.18", language)],
    [gettext("clock.lmonthnames.19", language)],
    [gettext("clock.lmonthnames.20", language)]
  ];

  const weekdays = [
    [gettext("clock.lwdaynames.1", language)],
    [gettext("clock.lwdaynames.2", language)],
    [gettext("clock.lwdaynames.3", language)],
    [gettext("clock.lwdaynames.4", language)],
    [gettext("clock.lwdaynames.5", language)],
    [gettext("clock.lwdaynames.6", language)],
    [gettext("clock.lwdaynames.7", language)],
    [gettext("clock.lwdaynames.8", language)]
  ];
  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar language={language} setlg={setLanguage} />
      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>{gettext('clock.title', language)}</span>
  
        <Clock language={language} seasons={seasonNames} lunars={lunarNames} weekdays={weekdays} />
      </div>
    </div>
  )
}
