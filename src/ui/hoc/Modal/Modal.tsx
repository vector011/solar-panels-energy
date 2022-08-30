import React, { useRef } from 'react'
import { createPortal } from 'react-dom'

import Icon from '../../Icon'
import { useBodyNoScroll, useClickOutside, useDidMount } from 'hooks'

import * as S from './styled'

type ModalProps = {
  onClose: () => void
}

const rootElement = document.getElementById('root')

// TODO: modal animation

const Modal =
  <T extends object>(Component: React.ComponentType<T>) =>
  ({ onClose, ...props }: ModalProps & T) => {
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
            <Icon name="close-icon" title="Zavrieť" width={38} height={38} />
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
