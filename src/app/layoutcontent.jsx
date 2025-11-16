'use client'

import { useState, useEffect } from 'react'
import { TranslationLanguage, LanguageTranslations } from '@/globals/translationprovider'

import stripJsonComments from 'strip-json-comments'
import { langlist } from '@/globals/translations'

let loaded = false

export default function SecondRootLayout({ children }) {
  const [ language, setLanguage ] = useState('English')
  const [ translations, setTranslations ] = useState({})

  async function setLanguageWrapper(lang) {
    if (langlist.indexOf(lang) == -1) lang = 'English'
    const request = await fetch(`/translations/${lang.toLowerCase()}.jsonc`)
    const astext = await request.text()
    const asjson = JSON.parse(stripJsonComments(astext))

    setLanguage(lang)
    setTranslations(asjson)
  }

  useEffect(() => {
    function loadLanguage() {
      const item = localStorage.getItem('lang')
  
      if (typeof item == 'string') {
        setLanguageWrapper(item)
      } else {
        setLanguageWrapper('English')
      }
    }
    
    if (loaded) return
    loaded = true
    loadLanguage()
  })

  return (
    <TranslationLanguage value={{ language, setLanguageWrapper }}>
      <LanguageTranslations value={translations}>
        {children}
      </LanguageTranslations>
    </TranslationLanguage>
  )
}
