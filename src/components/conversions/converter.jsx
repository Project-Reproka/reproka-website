'use client'

import { useState } from 'react'

import { gettext } from '@/globals/translations'

export default function Converter({ units, language }) {
  const [selected, setSelected] = useState('none') // selected unit group
  const [value, setValue] = useState(0) // value of input
  const [unit1, setUnit1] = useState(0) // index of the input unit
  const [unit2, setUnit2] = useState(0) // index of the output unit
  const [result, setResult] = useState(0) // result

  function handleTypeChange(e) {
    setSelected(e.target.value)
  }

  function handleUnit1Change(e) {
    setUnit1(e.target.value)    
  }

  function handleUnit2Change(e) {
    setUnit2(e.target.value)
  }

  function handleValueChange(e) {
    setValue(parseFloat(e.target.value))
  }

  function convertunit(number) {
    var base = units[selected][unit1][1] * number // find the base unit
    var targetmult = units[selected][unit2][1] // find the thingy to multiply with

    setResult((targetmult ** -1) * base) // we calculate the final result
  }

  function handleButtonClick(e) {
    if (selected == 'none') return

    convertunit(value)
  }

  return (
    <div className="flex flex-col rounded-xl p-8 bg-[rgba(127,127,255,5%)] w-11/12 sm:w-5/6 lg:w-2/3 xl:w-1/2 gap-4">
      <div className="w-full flex flex-row gap-4 shadow-custom">
        <input className="w-1/2 bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg" type="number" placeholder={gettext('conversions.sourcenum', language)} onInput={handleValueChange}></input>

        <select className="w-1/2 bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg" onChange={handleTypeChange}> 
          <option value="none" className="bg-[#313157]">{gettext('conversions.group', language)}</option>
          <option value="leng" className="bg-[#313157]">{gettext('conversions.lengthlbl', language)}</option>
          <option value="mass" className="bg-[#313157]">{gettext('conversions.masslbl', language)}</option>
          <option value="volu" className="bg-[#313157]">{gettext('conversions.volumelbl', language)}</option>
          <option value="temp" className="bg-[#313157]">{gettext('conversions.temperaturelbl', language)}</option>
        </select>
      </div>

      <div className="w-full flex flex-row gap-4 shadow-custom">
        <select className="w-1/2 bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg" onChange={handleUnit1Change}>
          <option className="bg-[#313157]">{gettext('conversions.sourceunit', language)}</option>

          {units[selected].map(unit => 
            <option value={units[selected].indexOf(unit)} key={units[selected].indexOf(unit)} className="bg-[#313157]">{unit[0]}</option>
          )}
        </select>

        <select className="w-1/2 bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg" onChange={handleUnit2Change}>
          <option className="bg-[#313157]">{gettext('conversions.targetunit', language)}</option>

          {units[selected].map(unit => 
            <option value={units[selected].indexOf(unit)} key={units[selected].indexOf(unit)} className="bg-[#313157]">{unit[0]}</option>
          )}
        </select>
      </div>

      <button className="w-full bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg shadow-custom" onClick={handleButtonClick}>{gettext('conversions.convertbtn', language)}</button>
      <span className="w-full bg-[rgba(127,127,255,10%)] px-4 py-2 rounded-lg shadow-custom">{gettext('conversions.result', language)} {result ? result : '---'}</span>
    </div>
  )
}
