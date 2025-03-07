import Link from 'next/link'

import Converter from '@/components/conversions/converter'

export const metadata = {
  title: 'Unit Conversion // Reproka Website',
  description: 'Convert between Reproka units and Earth units. Earth units used are in metric.'
}

export default function Home() {
  var units = {
    none: [
      ['Psst- try selecting a unit group!', 'none', 1]
    ],
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
 
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-center gap-9 text-center px-3 py-6 min-h-screen">
      <span className="text-6xl z-10" style={{textShadow:'0px 0px 50px #ffffff44'}}>Unit Conversion</span>

      <Converter units={units} />

      <span style={{textShadow:'0px 0px 50px #ffffff44'}}>
        Return to our&nbsp;
        <Link href="/" className="underline text-cyan-200">homepage</Link>.
      </span>
    </div>
  )
}
