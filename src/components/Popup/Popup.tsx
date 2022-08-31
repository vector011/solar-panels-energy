import React, { Dispatch, SetStateAction } from 'react'

import Form from '../Form'
import { Box, Counter, Modal, Text } from 'ui'

import * as S from './styled'

type Props = {
  smallValue: number
  bigValue: number
  changeSmall: Dispatch<SetStateAction<number>>
  changeBig: Dispatch<SetStateAction<number>>
  onClose?: () => void
}

const Popup = ({ smallValue, bigValue, changeSmall, changeBig }: Props) => (
  <>
    <Text as="h1" variant="heading2" mb="5xl">
      Požiadavka na zaslanie cenovej ponuky
    </Text>

    <Box tablet={{ row: true, gap: 'section' }} gap="xxl" mb="5xl">
      <Box
        flexDirection="row"
        alignItems="center"
        tablet={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <Text variant="button" uppercase mr="xl" tablet={{ mb: 'l', mr: '0' }}>
          Menší panel:
        </Text>

        <Counter value={smallValue} onChange={changeSmall} />
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        tablet={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <Text variant="button" uppercase mr="xl" tablet={{ mb: 'l', mr: '0' }}>
          Väčší panel:
        </Text>

        <Counter value={bigValue} onChange={changeBig} />
      </Box>
    </Box>

    <Form />
  </>
)

export default React.memo(Modal<Props>(Popup))
