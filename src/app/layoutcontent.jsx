'use client'

import { useState, useEffect } from 'react'
import { TranslationLanguage, LanguageTranslations } from '@/globals/translationprovider'

import stripJsonComments from 'strip-json-comments'
import { langlist } from '@/globals/translations'

export default function SecondRootLayout({ children }) {
  const [ language, setLanguage ] = useState('English')
  const [ translations, setTranslations ] = useState({})

  useEffect(() => {
    if (typeof localStorage.getItem('lang') == 'string') {
      setLanguageWrapper(localStorage.getItem('lang'))
    } else {
      setLanguageWrapper('English')
    }
  }, [ setLanguageWrapper ])

  async function setLanguageWrapper(lang) {
    if (langlist.indexOf(lang) == -1) lang = 'English'
    const request = await fetch(`/translations/${lang.toLowerCase()}.jsonc`)
    const astext = await request.text()
    const asjson = JSON.parse(stripJsonComments(astext))

    setLanguage(lang)
    setTranslations(asjson)
  }

  return (
    <TranslationLanguage value={{ language, setLanguageWrapper }}>
      <LanguageTranslations value={translations}>
        {children}
      </LanguageTranslations>
    </TranslationLanguage>
  )
}
