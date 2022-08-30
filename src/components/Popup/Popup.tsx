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

    <Box row gap="section" mb="5xl">
      <Box>
        <Text uppercase mb="l">
          Menší panel:
        </Text>

        <Counter value={smallValue} onChange={changeSmall} />
      </Box>

      <Box>
        <Text uppercase mb="l">
          Väčší panel:
        </Text>

        <Counter value={bigValue} onChange={changeBig} />
      </Box>
    </Box>

    <Form />
  </>
)

export default React.memo(Modal<Props>(Popup))
