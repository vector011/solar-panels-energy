import React, { createContext, useState, useCallback, useMemo } from 'react'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import { I18N_LANG } from 'constants/global'

import translations from 'i18n'

const availableLangs = Object.keys(translations)
const defaultLang = availableLangs[0]

type AvailableLang = typeof availableLangs[number]

export type I18nContextValue = {
  activeLang: AvailableLang
  changeLanguage: (lang: AvailableLang) => void
}

export const I18nContext = createContext<I18nContextValue>(undefined!)

const initLang = localStorage.getItem(I18N_LANG) as AvailableLang

i18n.use(initReactI18next).init({
  resources: translations,
  lng: initLang || defaultLang,
  fallbackLng: defaultLang,
})

type Props = {
  children: React.ReactNode
}

export const I18nProvider = ({ children }: Props) => {
  const [activeLang, setActiveLang] = useState<AvailableLang>(
    initLang || defaultLang
  )

  const changeLanguage = useCallback((lang: AvailableLang) => {
    i18n.changeLanguage(lang).then(() => {
      setActiveLang(lang)
      localStorage.setItem(I18N_LANG, lang)
    })
  }, [])

  const value = useMemo(
    () => ({
      activeLang,
      changeLanguage,
    }),
    [activeLang, changeLanguage]
  )

  return <I18nContext.Provider {...{ value }}>{children}</I18nContext.Provider>
}
