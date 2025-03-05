'use client'

import { useState } from 'react'

/*export const metadata = {
  title: 'Unit Conversion // Reproka Website'
}*/

export default function Home() {
  const [selected, setSelected] = useState('leng') // selected unit group
  const [value, setValue] = useState(0) // value of input
  const [unit1, setUnit1] = useState(0) // index of the input unit
  const [unit2, setUnit2] = useState(0) // index of the output unit
  const [result, setResult] = useState(0) // result
  
  var units = {
    leng: [
      ['meter', 'm', 1], // base
      ['kilometer', 'km', 1000],
      ['millimeter', 'mm', 0.001],
      ['seijagemil', 'sg', .1032275],
      ['kaibroza', 'kb', 1.032275],
      ['omstaz', 'os', 10.32275],
      ['liðčazerun', "lc", 1032.275],
      ['čazerun', 'cr', 10322.75]
    ],
    mass: [
      ['gram', 'g', 1], // base
      ['kilogram', 'kg', 1000],
      ['metric ton', 't', 1000000],
      ['agozuba', 'ge', 1.0999],
      ['ezuba', 'e', 1099.9],
      ['maðezuba', 'me', 1099900]
    ],
    volu: [ 
      ['liter', 'l', 1], // base
      ['milliliter', 'ml', 0.001],
      ['paijas', 'p', 1.0999],
      ['þusbaijas', 'thp', 109.99]
    ],
    temp: [
      ['celsius', 'c', 1], // base
      ['þože', "th", 0.5201]
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

  function handleValueChange(e) {
    setValue(parseFloat(e.target.value))
  }

  function convertunit(number) {
    var base = units[selected][unit1][2] * number // find the base unit
    var targetmult = units[selected][unit2][2] // find the thingy to multiply with

    setResult((targetmult ** -1) * base) // we calculate the final result
  }

  function handleButtonClick(e) {
    convertunit(value)
  }
 
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Unit Conversion</span>

      <input className='text-black' type="number" placeholder="Type in from unit..." onInput={handleValueChange}></input>
      <select className='text-black' id="unittype" onChange={handleTypeChange}> 
        <option value="leng">Length</option>
        <option value="volu">Volume</option>
        <option value="mass">Mass</option>
        <option value="temp">Temperature</option>
      </select> 

      <select className="text-black" onChange={handleUnit1Change}>
        <option>--- CONVERT FROM ---</option>
        {units[selected].map(unit => 
          <option value={units[selected].indexOf(unit)} key={units[selected].indexOf(unit)}>{unit[0]}</option>
        )}
      </select>

      <select className='text-black' onChange={handleUnit2Change}>
        <option>--- CONVERT TO ---</option>
        {units[selected].map(unit => 
          <option value={units[selected].indexOf(unit)} key={units[selected].indexOf(unit)}>{unit[0]}</option>
        )}
      </select>

      <button onClick={handleButtonClick}>go</button>
      <span>Result: {result ? result : '---'}</span>

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Return to our&nbsp;
        <a href="/" className="underline text-cyan-200">homepage</a>.
      </span>
    </div>
  )
}
