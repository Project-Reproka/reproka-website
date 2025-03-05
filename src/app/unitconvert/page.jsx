'use client'

import { useState } from 'react'

/*export const metadata = {
  title: 'Unit Conversion // Reproka Website'
}*/

export default function Home() {
  const [selected, setSelected] = useState('leng')
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [unit1, setUnit1] = useState(0)
  const [unit2, setUnit2] = useState(0)
  const [result, setResult] = useState(0)
  
  var units = {
    leng: [
      ['meter', 'm'],
      ['kilometer', 'km'],
      ['millimeter', 'mm'],
      ['seijagemil', 'sg'],
      ['kaibroza', 'kb'],
      ['omstaz', 'os'],
      ['liðčazerun', "lc"],
      ['čazerun', 'cr']
    ],
    mass: [
      ['gram', 'g'],
      ['kilogram', 'kg'],
      ['metric ton', 't'],
      ['agozuba', 'ge'],
      ['ezuba', 'e'],
      ['maðezuba', 'me']
    ],
    volu: [
      ['milliliter', 'ml'],
      ['liter', 'l'],
      ['paijas', 'p'],
      ['þusbaijas', 'thp']
    ],
    temp: [
      ['celsius', 'c'],
      ['þože', "th"]
    ]
  }

  function handleTypeChange(e) {
    setSelected(e.target.value)
  }

  function handleUnit1Change(e) {
    setUnit1(e.target.value)    
  }

  function handleUnit2Change(e) {
    setUnit2(e.target.value)
  }

  function convertunit(unit) {
    // we heist do
  }

  function handleButtonClick(e) {
    
  }

  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Unit Conversion</span>
      <input className='text-black' type="number" placeholder="Type in from unit..."></input>

      <select className='text-black' id="unittype" onChange={handleTypeChange}>
        <option value="leng">Length</option>
        <option value="volu">Volume</option>
        <option value="mass">Mass</option>
        <option value="temp">Temperature</option>
      </select>

      <select className="text-black" onChange={handleUnit1Change}>
        <option>--- CONVERT FROM ---</option>
        {units[selected].map(unit => 
          <option value={unit[1]} key={units[selected].indexOf(unit)}>{unit[0]}</option>
        )}
      </select>

      <select className='text-black' onChange={handleUnit2Change}>
        <option>--- CONVERT TO ---</option>
        {units[selected].map(unit => 
          <option value={unit[1]} key={units[selected].indexOf(unit)}>{unit[0]}</option>
        )}
      </select>

      <button onClick={handleButtonClick}>go</button>

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Return to our&nbsp;
        <a href="/" className="underline text-cyan-200">homepage</a>.
      </span>
    </div>
  )
}
