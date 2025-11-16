'use client'

import { useState, useEffect } from 'react'
import $, { $seasonmonth, $lunarmonth, $weekday, $numberinfo, $number, $elementless } from '@/components/generic/dollarsign'
import Image from 'next/image'

export default function Clock({ language }) {
  const [date, setDate] = useState({ seasonal: [0, 0, 0], lunar: [0, 0], time: "", meal: 0, talk: 0, longfall: 0, mid: 0, tim: 0 })
  const numberbase = $numberinfo('numberbase')
  const zero = $number(0)

  function getPointOnCircle(centerx, centery, radius, deg) {
    deg -= 90

    var rad = deg * (Math.PI / 180) // radian-ifier

    var xpos = centerx + radius * Math.cos(rad)
    var ypos = centery + radius * Math.sin(rad)

    return { xpos, ypos }
  }
  
  const seasonNames = [
    $seasonmonth('bsp'),
    $seasonmonth('esp'),
    $seasonmonth('bsu'),
    $seasonmonth('esu'),
    $seasonmonth('bhr'),
    $seasonmonth('ehr'),
    $seasonmonth('bwr'),
    $seasonmonth('ewr')
  ]

  const lunarNames = [
    $lunarmonth(0),
    $lunarmonth(1),
    $lunarmonth(2),
    $lunarmonth(3),
    $lunarmonth(4),
    $lunarmonth(5),
    $lunarmonth(6),
    $lunarmonth(7),
    $lunarmonth(8),
    $lunarmonth(9),
    $lunarmonth(10),
    $lunarmonth(11),
    $lunarmonth(12),
    $lunarmonth(13),
    $lunarmonth(14),
    $lunarmonth(15),
    $lunarmonth(16),
    $lunarmonth(17),
    $lunarmonth(18),
    $lunarmonth(19)
  ]

  const weekdays = [
    $weekday(1),
    $weekday(2),
    $weekday(3),
    $weekday(4),
    $weekday(5),
    $weekday(6),
    $weekday(7),
    $weekday(8)
  ]

  useEffect(() => {
    var canvas = document.getElementById('clockhands')
    var ctx = canvas.getContext('2d')
    ctx.lineWidth = 4

    const updateDate = () => {
      // for now this system does not respect any other systems, might implement that later idk
      const sec_in_day = 84486.786598;
      const daysPerLunarMonth = 16;
      const seasonalMonthPattern = [42, 43, 42, 43, 43, 43, 42, 43];
      const epochStart = new Date(Date.UTC(1421, 0, 15, 12, 0, 0));
      const now = new Date();
      const elapsedSeconds = (now - epochStart) / 1000;
      const elapsedDays = Math.floor(elapsedSeconds / sec_in_day);
      const daysec = elapsedSeconds % sec_in_day;

      // --- Seasonal Calendar Calculation ---
      let seasonalYear = 0, daysCount = 0;
      while (daysCount + seasonalMonthPattern.reduce((a, b) => a + b) + (seasonalYear % 4 === 0 ? 1 : 0) <= elapsedDays) {
        daysCount += seasonalMonthPattern.reduce((a, b) => a + b) + (seasonalYear % 4 === 0 ? 1 : 0);
        seasonalYear++;
      }

      let remainingDays = elapsedDays - daysCount;
      let seasonalMonth = 0;
      for (let i = 0; i < seasonalMonthPattern.length; i++) {
        let monthLength = seasonalMonthPattern[i] + (i === 0 && seasonalYear % 10 != 0 && seasonalYear % 2 === 0 ? 1 : 0);
        if (remainingDays < monthLength) break;
        remainingDays -= monthLength;
        seasonalMonth++;
      }

      // ---  Lunar Calendar Calculation ---
      // me when chatgpt code real (it sucks)
      const lunarMonth = Math.floor(elapsedDays / daysPerLunarMonth) % 20; // 20-month repeating cycle
      const dayInLunarMonth = (elapsedDays % daysPerLunarMonth) + 1;

      var meals_in_day, talks_in_meal, longfalls_in_talk, stonefalls_in_longfall;

      if (numberbase == 8) {
        meals_in_day = 0o20
        talks_in_meal = 0o12
        longfalls_in_talk = 0o30
        stonefalls_in_longfall = 0o40
      } else if (numberbase == 20) {        // i love time :) NOTE this is a PLACEHOLDER please get time stuff from zora ASAP
        meals_in_day = 1354           // i love time :)
        talks_in_meal = 562           // i love time :)
        longfalls_in_talk = 23546     // i love time :)
        stonefalls_in_longfall = 3523  // i love time :)
      } else {
        meals_in_day = 15
        talks_in_meal = 8
        longfalls_in_talk = 20
        stonefalls_in_longfall = 50
      }

      var meal = Math.floor(daysec / (sec_in_day / meals_in_day));
      var mealdec = daysec / (sec_in_day / meals_in_day); // decimal
      var mealsec = daysec % (sec_in_day / meals_in_day);
      var talk = Math.floor(mealsec / (sec_in_day / meals_in_day / talks_in_meal));
      var talkdec = mealsec / (sec_in_day / meals_in_day / talks_in_meal); // decimal
      var talksec = mealsec % (sec_in_day / meals_in_day / talks_in_meal);
      var longfall = Math.floor(talksec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk));
      var longfalldec = talksec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk); // decimal
      var longfallsec = talksec % (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk);
      var stonefall = Math.floor(longfallsec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk / stonefalls_in_longfall));
      var stonefalldec = longfallsec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk / stonefalls_in_longfall); // decimal
      setDate({
        seasonal: [remainingDays + 1, seasonalMonth, seasonalYear],
        lunar: [dayInLunarMonth, lunarMonth],
        meal: meal,
        talk: talk,
        longfall: longfall,
        stonefall: stonefall,
        mid: meals_in_day,
        tim: talks_in_meal,
        lit: longfalls_in_talk
      })

      var pos1 = getPointOnCircle(210, 210, 150, (talkdec / talks_in_meal) * 360)
      var pos2 = getPointOnCircle(210, 210, 200, (mealdec / meals_in_day) * 360)
      var pos3 = getPointOnCircle(210, 210, 100, (longfalldec / longfalls_in_talk) * 360)

      ctx.clearRect(0, 0, 420, 420)

      ctx.strokeStyle = '#5599ff'
      ctx.beginPath()
      ctx.moveTo(210, 210)
      ctx.lineTo(pos1.xpos, pos1.ypos)
      ctx.stroke()

      ctx.strokeStyle = '#ff8080'
      ctx.beginPath()
      ctx.moveTo(210, 210)
      ctx.lineTo(pos2.xpos, pos2.ypos)
      ctx.stroke()

      ctx.strokeStyle = '#44aa00'
      ctx.beginPath()
      ctx.moveTo(210, 210)
      ctx.lineTo(pos3.xpos, pos3.ypos)
      ctx.stroke()
    }

    updateDate()

    const int = setInterval(updateDate, 50)
    return () => clearInterval(int)
  }, [language])
  
  var facename = (numberbase == 8 ? 'octal' : 'decimal') + '-clockface.svg'

  return (
    <div className="flex flex-col gap-8">
      <div className="relative h-[420px] w-[420px] rounded-full scale-75 md:scale-100">
        <Image className="absolute top-0 left-0 rounded-full border-cyan-200 border-2 shadow-custom" src={'/resources/images/clockfaces/' + (facename)} width={420} height={420} alt={$elementless('Clockface')} />
        <canvas className="absolute top-0 left-0" id="clockhands" width={420} height={420} />
      </div>

      <div className="z-10">
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{$number(date.seasonal[0])} {seasonNames[date.seasonal[1]]} {$number(date.seasonal[2])}</p>
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{$number(date.lunar[0])} {lunarNames[date.lunar[1]]}, {$number(date.meal).toString().padStart(2, zero)}:{$number(date.talk)}:{String($number(date.longfall)).padStart(2, zero)}:{String($number(Math.floor(date.stonefall))).padStart(2, zero)}</p>
      </div>
    </div>
  )
}
