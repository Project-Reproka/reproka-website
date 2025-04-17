'use client'

import { useState, useEffect } from 'react'
import { gettext, langlist, number } from '@/globals/translations'
import Image from 'next/image';
const {createCanvas, loadImage} = require("canvas")


export default function Clock({language}) {
  const [date, setDate] = useState({ seasonal: "", lunar: "", time: "" });

  useEffect(() => {
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
        meals_in_day = 0o20;
        talks_in_meal = 0o12;
        longfalls_in_talk = 0o30;
        stonefalls_in_longfall = 0o40;
      } else if (base == 10) {
        var meals_in_day = 15
        var talks_in_meal = 8
        var longfalls_in_talk = 20
        var stonefalls_in_longfall = 50
      }
      var meal = Math.floor(daysec / (sec_in_day / meals_in_day));
      var mealsec = daysec % (sec_in_day / meals_in_day);
      var talk = Math.floor(mealsec / (sec_in_day / meals_in_day / talks_in_meal));
      var talksec = mealsec % (sec_in_day / meals_in_day / talks_in_meal);
      var longfall = Math.floor(talksec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk));
      var longfallsec = talksec % (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk);
      var stonefall = Math.floor(longfallsec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk / stonefalls_in_longfall));

      setDate({
        seasonal: `${(remainingDays + 1).toString(base)} ${seasonNames[seasonalMonth]}, ${seasonalYear.toString(base)}`,
        lunar: `${dayInLunarMonth.toString(base)} ${lunarNames[lunarMonth]}`,
        time: `${String(meal.toString(base)).padStart(2, '0')}:${talk.toString(base)}:${String(longfall.toString(base)).padStart(2, '0')}:${String(Math.floor(stonefall).toString(base)).padStart(2, '0')}`,
        meal: meal,
        talk: talk,
        mid:  meals_in_day,
        tim:  talks_in_meal
      })
    }
    var image;
    if (gettext("general.numberbase", language) == 8) {
      image = "/resources/images/clockfaces/clock-octal.svg";
    } else if (gettext("general.numberbase", language) == 10) {
      image = "/resources/images/clockfaces/clock-decimal.svg";
    }
    var c = createCanvas(280, 280)
    var ctx = c.getContext("2d");
    ctx.strokeStyle = 'hex(#ff0000)'
    ctx.beginPath();
    ctx.lineTo(140, 280);
    ctx.stroke()
    loadImage(image).then((image) => {
      ctx.drawImage(image)
    })
    updateDate()

    const interval = setInterval(updateDate, 50)
    return () => clearInterval(interval)
  }, [language])
  
  
  return (
    <div>
      <div>

      </div>
      <div>
        {/*<Image src="/resources/images/clockfaces/clock-decimal.svg" width={100} height={100} alt={gettext('clock.cloclfacealt', language)} />*/}
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.seasonal}</p>
        <p className="text-2xl" style={{textShadow:'0px 0px 50px #ffffff44'}}>{date.lunar}, {date.time}</p>
      </div>
    </div>
  )
}
