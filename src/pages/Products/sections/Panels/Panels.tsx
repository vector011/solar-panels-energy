import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { List, Panel, Popup } from 'components'
import { Box, Button, Text } from 'ui'
import { useToggle } from 'hooks'

const Panels = () => {
  const { t } = useTranslation()

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
        alignItems="center"
        gap="section"
      >
        <Panel
          {...t('products:panels.small', { returnObjects: true })}
          value={small}
          onChange={setSmall}
        />

        <Panel
          {...t('products:panels.big', { returnObjects: true })}
          value={big}
          onChange={setBig}
          big
        />
      </Box>

      <Button wide onClick={show}>
        {t('products:panels.button')}
      </Button>

      <Box
        as="article"
        position="relative"
        mt="4xl"
        tablet={{ mt: '6xl' }}
        desktop={{ mt: 'section' }}
      >
        <Text as="h2" variant="heading2" mb="3xl" tablet={{ mb: '4xl' }}>
          {t('products:benefits.subtitle')}
        </Text>

        <Box largeDesktop={{ maxw: '75%' }} maxw="100%">
          <List
            items={
              t('products:benefits.list', { returnObjects: true }) as string[]
            }
          />
        </Box>
      </Box>
    </>
  )
}

export default React.memo(Panels)
