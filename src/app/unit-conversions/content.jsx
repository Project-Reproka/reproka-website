'use client'

import { useState, useEffect } from 'react'

import { gettext } from '@/globals/translations'
import Navbar from '@/components/generic/navbar'
import Converter from '@/components/conversions/converter'

export default function ConversionsContent() {
  var [language, setLanguage] = useState(0)
  
  useEffect(() => {
    if (parseInt(localStorage.getItem('lang'))) {
      setLanguage(parseInt(localStorage.getItem('lang')))
    }
  }, [language, setLanguage])

  var units = {
    none: [
      [gettext('conversions.nounitgroup', language),  1]
    ],
    leng: [
      [gettext('conversions.length.meter', language), 1], // base
      [gettext('conversions.length.kmeter', language), 1000],
      [gettext('conversions.length.mmeter', language), 0.001],
      [gettext('conversions.length.seijagemil', language), 0.1032275],
      [gettext('conversions.length.kaibroza', language), 0.82582],
      [gettext('conversions.length.omstaz', language), 6.60656],
      [gettext('conversions.length.lidhchazerun', language), 422.81984],
      [gettext('conversions.length.chazerun', language), 3382.55872]
    ],
    mass: [
      [gettext('conversions.mass.gram', language), 1], // base
      [gettext('conversions.mass.kgram', language), 1000],
      [gettext('conversions.mass.mton', language), 1000000],
      [gettext('conversions.mass.agozuba', language), 1.0999],
      [gettext('conversions.mass.ezuba', language), 1099.9],
      [gettext('conversions.mass.madhezuba', language), 1099900]
    ],
    volu: [ 
      [gettext('conversions.volume.liter', language),  1], // base
      [gettext('conversions.volume.mliter', language), 0.001],
      [gettext('conversions.volume.paijas', language), 1.0999],
      [gettext('conversions.volume.thusbaijas', language), 70.3936]
    ],
    temp: [
      [gettext('conversions.temperature.celcius', language), 1], // base
      [gettext('conversions.temperature.thozhe', language), 0.7265625]
    ]
  }

  return (
    <div className="min-h-screen w-full flex flex-row items-center text-center">
      <Navbar language={language} setlg={setLanguage} />
        
      <div className="h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
        <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>{gettext('conversions.header', language)}</span>

        <Converter units={units} language={language} />
      </div>
    </div>
  )
}
