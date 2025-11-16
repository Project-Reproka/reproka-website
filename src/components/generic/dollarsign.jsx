'use client'

import { LanguageTranslations } from '@/globals/translationprovider'
import { useContext } from 'react'

export default function $({ children }) {
  const translations = useContext(LanguageTranslations)
  
  return translations[children] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'
}

export function $elementless(value) {
  const translations = useContext(LanguageTranslations)
  
  return translations[value] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'
}

export function $units(category, text, plural, context) {
  const t1 = context || {}
  const t2 = t1.language_info || {}
  const t3 = t2.units || {}
  const t4 = t3[category] || {}
  const t5 = t4[text] || {}
  const t6 = t5[plural ? 1 : 0] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'
  
  return t6
}

export function $unitvalues(context) {
  const t1 = context || {}
  const t2 = t1.language_info || {}
  const t3 = t2.unit_values || {}

  return t3
}

export function $number(number) {
  const translations = useContext(LanguageTranslations)
  const linfo = translations.language_info || {}
  const lnumbers = linfo.numbers || {}
  const ldigits = lnumbers.digits || {}

  var numstr = number.toString(parseInt(lnumbers.numberbase || 10))
  var thing = numstr.split('')
  var other = ''

  thing.forEach(number => {
    if (number == '.') {
      other += lnumbers.decimal || '.'
    } else if (number != '-') {
      other += ldigits[number] || 0 // stupid default values
    }
  })

  if (number < 0) {
    return (lnumbers.number_negator_prefix || '-') + other + (lnumbers.number_negator_suffix || '')
  } else {
    return other
  }
}

export function $seasonmonth(number) {
  const translations = useContext(LanguageTranslations)

  const t1 = translations.language_info || {}
  const t2 = t1.time_and_date || {}
  const t3 = t2.season_months || {}
  const t4 = t3[number] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'

  return t4
}

export function $lunarmonth(number) {
  const translations = useContext(LanguageTranslations)
  
  const t1 = translations.language_info || {}
  const t2 = t1.time_and_date || {}
  const t3 = t2.lunar_months || {}
  const t4 = t3[number] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'
  
  return t4
}

export function $weekday(number) {
  const translations = useContext(LanguageTranslations)

  const t1 = translations.language_info || {}
  const t2 = t1.time_and_date || {}
  const t3 = t2.weekdays || {}
  const t4 = t3[number] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'

  return t4
}

export function $numberinfo(thing) {
  const translations = useContext(LanguageTranslations)

  const t1 = translations.language_info || {}
  const t2 = t1.numbers || {}
  const t3 = t2[thing] || '!!!! 🚨🚨 UNDEFINED TEXT 🚨🚨 !!!!'

  return t3
}
