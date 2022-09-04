import React, { useCallback, useState } from 'react'

import { Panel, Popup } from 'components'
import { Box, Button } from 'ui'
import { useToggle } from 'hooks'

import * as S from './styled'

const PANELS = {
  small: {
    w: '435-455',
    mm: '2102x1040x30',
    kg: '24',
  },
  big: {
    w: '530-555',
    mm: '2279x1134x35',
    kg: '28,3',
  },
}

const Panels = () => {
  const [small, setSmall] = useState<number>(0)
  const [big, setBig] = useState<number>(0)

  const { visible: remove, show: canRemove, hide: cannotRemove } = useToggle()
  const { visible, show, hide } = useToggle()

  const reset = useCallback(() => {
    setSmall(0)
    setBig(0)
    cannotRemove()
  }, [setSmall, setBig, cannotRemove])

  const handleClose = useCallback(() => {
    hide()
    if (remove) reset()
  }, [remove, hide, reset])

  return (
    <>
      {visible && (
        <Popup
          smallValue={small}
          bigValue={big}
          changeSmall={setSmall}
          changeBig={setBig}
          onClose={handleClose}
          cb={canRemove}
        />
      )}

      <Box
        equal
        mb="4xl"
        tablet={{ mb: '6xl' }}
        desktop={{ mb: 'section' }}
        css={S.responsivePanels}
      >
        <Panel {...PANELS.small} value={small} onChange={setSmall} />

        <Panel {...PANELS.big} value={big} onChange={setBig} big />
      </Box>

      <Button wide onClick={show}>
        Požiadať o zaslanie cenovej ponuky
      </Button>
    </>
  )
}

export default React.memo(Panels)
