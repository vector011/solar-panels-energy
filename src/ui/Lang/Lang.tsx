import React, { useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SVG from 'react-inlinesvg'

import { I18nContext } from 'contexts'
import translations from 'i18n'

import * as S from './styled'

const availableLangs = Object.keys(translations)

const Lang = () => {
  const { t } = useTranslation()

  const { activeLang, changeLanguage } = useContext(I18nContext)

  const lang = useMemo(
    () => availableLangs[activeLang === availableLangs[0] ? 1 : 0],
    [activeLang]
  )

  const toggleLang = useCallback(
    () => changeLanguage(lang),
    [lang, changeLanguage]
  )

  return (
    <S.Wrapper onClick={toggleLang} aria-label="change language">
      <SVG
        src={`/assets/langs/${lang}.svg`}
        title={t('global:button.lang', { lang })!}
        width={33}
        height={20}
      />
    </S.Wrapper>
  )
}

export default React.memo(Lang)
