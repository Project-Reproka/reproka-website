'use client'

import { useState, useEffect } from 'react'
import { gettext  } from '@/globals/translations'
import Image from 'next/image'


export default function Clock({ language, seasons, lunars, weekdays }) {
  const [date, setDate] = useState({ seasonal: "", lunar: "", time: "" })

  var meals_in_day, talks_in_meal, longfalls_in_talk, stonefalls_in_longfall; 

  if (language == 3) {
    meals_in_day = 0o20;
    talks_in_meal = 0o12;
    longfalls_in_talk = 0o30;
    stonefalls_in_longfall = 0o40;
  } else {
    meals_in_day = 15;
    talks_in_meal = 8;
    longfalls_in_talk = 20;
    stonefalls_in_longfall = 50;
  }

  useEffect(() => {
    var sec_in_day = 84500;
    var daysPerLunarMonth = 16;
    var seasonalMonthPattern = [42, 43, 42, 42, 43, 42, 42, 42];
    var epochStart = new Date(Date.UTC(1421, 0, 15, 12, 0, 0));
    var now = new Date();
    var elapsedSeconds = (now - epochStart) / 1000;
    var elapsedDays = Math.floor(elapsedSeconds / sec_in_day);
    var daysec = elapsedSeconds % sec_in_day;

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

    function thing() {
      var lunarMonth = Math.floor(elapsedDays / daysPerLunarMonth) % 20; // 20-month repeating cycle
      var dayInLunarMonth = (elapsedDays % daysPerLunarMonth) + 1;

      var meal = Math.floor(daysec / (sec_in_day / meals_in_day));
      var mealsec = daysec % (sec_in_day / meals_in_day);
      var talk = Math.floor(mealsec / (sec_in_day / meals_in_day / talks_in_meal));
      var talksec = mealsec % (sec_in_day / meals_in_day / talks_in_meal);
      var longfall = Math.floor(talksec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk));
      var longfallsec = talksec % (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk);
      var stonefall = Math.floor(longfallsec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk / stonefalls_in_longfall));

      setDate({
        seasonal: `${remainingDays + 1} ${seasons[seasonalMonth]}, ${seasonalYear}`,
        lunar: `${dayInLunarMonth} ${lunars[lunarMonth]}`,
        time: `${String(meal).padStart(2, '0')}:${talk}:${String(longfall).padStart(2, '0')}:${(String(Math.floor(stonefall)).padStart(2, '0'))}`
      })
    }

    //thing() ?????????????????????????????
    setInterval(thing, 500)
  }, [language])

  return (
    <div>
      <Image src="/resources/images/clockfaces/clock-decimal.svg" width={100} height={100} alt={gettext('clock.clockfacealt', language)} />

      <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.seasonal}</p>
      <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.lunar}, {date.time}</p>
    </div>
  )
}
