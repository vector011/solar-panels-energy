/* eslint-disable */

import React, { ComponentType, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import Icon from '../../Icon'
import { useBodyNoScroll, useClickOutside, useDidMount } from 'hooks'

import * as S from './styled'

type ModalProps = {
  onClose: () => void
}

const rootElement = document.getElementById('root')

const Modal =
  <T extends object>(Component: ComponentType<T>) =>
  ({ onClose, ...props }: ModalProps & T) => {
    const { t } = useTranslation()

    const [disableScroll, enableScroll] = useBodyNoScroll()

    const ref = useRef<HTMLDivElement>(null)

    useClickOutside(ref, onClose)

    useDidMount(() => {
      disableScroll()
      return () => enableScroll()
    })

    return createPortal(
      <S.Wrapper>
        <S.Modal {...{ ref }}>
          <S.Close onClick={onClose}>
            <Icon
              name="close-icon"
              title={t('global:button.close', { defaultValue: 'close' })!}
              width={38}
              height={38}
            />
          </S.Close>

          <S.Content>
            <Component {...({ onClose, ...props } as T)} />
          </S.Content>
        </S.Modal>
      </S.Wrapper>,
      rootElement!
    )
  }

export default Modal
