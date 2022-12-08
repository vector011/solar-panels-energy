import React, { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import Form from '../Form'
import { Box, Counter, Modal, Text } from 'ui'

type Props = {
  smallValue: number
  bigValue: number
  changeSmall: Dispatch<SetStateAction<number>>
  changeBig: Dispatch<SetStateAction<number>>
  cb: () => void
}

const Popup = ({ smallValue, bigValue, changeSmall, changeBig, cb }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      <Text as="h1" variant="heading2" mb="5xl">
        {t('components:popup.title')}
      </Text>

      <Box tablet={{ row: true, gap: 'section' }} gap="xxl" mb="5xl">
        <Box
          flexDirection="row"
          alignItems="center"
          tablet={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <Text
            variant="button"
            uppercase
            mr="xl"
            tablet={{ mb: 'l', mr: '0' }}
          >
            {t('components:panel.title', {
              size: t('components:panel.size.small'),
            })}
            :
          </Text>

          <Counter value={smallValue} onChange={changeSmall} />
        </Box>

        <Box
          flexDirection="row"
          alignItems="center"
          tablet={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <Text
            variant="button"
            uppercase
            mr="xl"
            tablet={{ mb: 'l', mr: '0' }}
          >
            {t('components:panel.title', {
              size: t('components:panel.size.big'),
            })}
            :
          </Text>

          <Counter value={bigValue} onChange={changeBig} />
        </Box>
      </Box>

      <Form
        subject={t('components:popup.subject')}
        addition={t('components:popup.addition', { smallValue, bigValue })!}
        cb={cb}
      />
    </>
  )
}

export default React.memo(Modal<Props>(Popup))
