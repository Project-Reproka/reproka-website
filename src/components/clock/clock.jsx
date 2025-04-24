'use client'

import { useState, useEffect } from 'react'
import { gettext } from '@/globals/translations'
import Image from 'next/image'


export default function Clock({ language }) {
  const [date, setDate] = useState({ seasonal: "", lunar: "", time: "", meal: 0, talk: 0, mid: 0, tim: 0 })

  function getPointOnCircle(centerx, centery, radius, deg) {
    deg -= 90

    var rad = deg * (Math.PI / 180) // radian-ifier

    var xpos = centerx + radius * Math.cos(rad)
    var ypos = centery + radius * Math.sin(rad)

    return { xpos, ypos }
  }

  useEffect(() => {
    var canvas = document.getElementById('clockhands')
    var ctx = canvas.getContext('2d')
    ctx.lineWidth = 4

    const updateDate = () => {
      const sec_in_day = 84500;
      const daysPerLunarMonth = 16;
      const seasonalMonthPattern = [42, 43, 42, 42, 43, 42, 42, 42];
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
        let monthLength = seasonalMonthPattern[i] + (i === 0 && seasonalYear % 4 === 0 ? 1 : 0);
        if (remainingDays < monthLength) break;
        remainingDays -= monthLength;
        seasonalMonth++;
      }

      // ---  Lunar Calendar Calculation ---
      // me when chatgpt code real
      const lunarMonth = Math.floor(elapsedDays / daysPerLunarMonth) % 20; // 20-month repeating cycle
      const dayInLunarMonth = (elapsedDays % daysPerLunarMonth) + 1;

      const seasonNames = [
        [gettext("clock.smonthnames.bsp", language)],
        [gettext("clock.smonthnames.esp", language)],
        [gettext("clock.smonthnames.bsu", language)],
        [gettext("clock.smonthnames.esu", language)],
        [gettext("clock.smonthnames.bhr", language)],
        [gettext("clock.smonthnames.ehr", language)],
        [gettext("clock.smonthnames.bwr", language)],
        [gettext("clock.smonthnames.ewr", language)]
      ]

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
      ]

      const weekdays = [
        [gettext("clock.lwdaynames.1", language)],
        [gettext("clock.lwdaynames.2", language)],
        [gettext("clock.lwdaynames.3", language)],
        [gettext("clock.lwdaynames.4", language)],
        [gettext("clock.lwdaynames.5", language)],
        [gettext("clock.lwdaynames.6", language)],
        [gettext("clock.lwdaynames.7", language)],
        [gettext("clock.lwdaynames.8", language)]
      ]

      var meals_in_day, talks_in_meal, longfalls_in_talk, stonefalls_in_longfall;
      var base = gettext('general.numberbase', language)

      if (base == 8) {
        meals_in_day = 0o20
        talks_in_meal = 0o12
        longfalls_in_talk = 0o30
        stonefalls_in_longfall = 0o40
      } else if (base == 20) {        // i love time :)
        meals_in_day = 1354           // i love time :)
        talks_in_meal = 562           // i love time :)
        longfalls_in_talk = 23546     // i love time :)
        stonefalls_in_longfall = 352  // i love time :)
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
        seasonal: `${(remainingDays + 1).toString(base)} ${seasonNames[seasonalMonth]}, ${seasonalYear.toString(base)}`,
        lunar: `${dayInLunarMonth.toString(base)} ${lunarNames[lunarMonth]}`,
        time: `${String(meal.toString(base)).padStart(2, '0')}:${talk.toString(base)}:${String(longfall.toString(base)).padStart(2, '0')}:${String(Math.floor(stonefall).toString(base)).padStart(2, '0')}`,
        meal: meal,
        talk: talk,
        long: longfall,
        mid:  meals_in_day,
        tim:  talks_in_meal,
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
  
  var facename = gettext('general.numberbase', language) == 8 ? 'octal' : 'decimal' + '-clockface.svg'
  
  return (
    <div className="flex flex-col gap-8">
      <div className="relative h-[420px] w-[420px] rounded-full">
        <Image className="absolute top-0 left-0 rounded-full border-cyan-200 border-2 shadow-custom" src={'/resources/images/clockfaces/' + (facename)} width={420} height={420} alt={gettext('clock.clockfacealt', language)} />
        <canvas className="absolute top-0 left-0" id="clockhands" width={420} height={420} />
      </div>

      <div className="z-10">
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.seasonal || '\u00a0'}</p>
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.lunar}, {date.time}</p>
      </div>
    </div>
  )
}
