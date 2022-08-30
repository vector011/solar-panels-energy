import React, { useState } from 'react'

import { Popup } from 'components'
import { Box, Button, Counter, Icon, Image, Text } from 'ui'
import { useToggle } from 'hooks'

import * as S from './styled'

const Panels = () => {
  const [small, setSmall] = useState<number>(0)
  const [big, setBig] = useState<number>(0)

  const { visible, show, hide } = useToggle()

  return (
    <>
      {visible && (
        <Popup
          smallValue={small}
          bigValue={big}
          changeSmall={setSmall}
          changeBig={setBig}
          onClose={hide}
        />
      )}

      <Box row equal alignItems="flex-end" mb="section">
        <Box as="article" alignItems="center">
          <Image
            src="images/solar-panel-small.png"
            alt="Menší solárny panel"
            width={473}
            height={295}
          />

          <Box row width="100%" pt="l" gap="6xl" alignItems="flex-end">
            <Box gap="l">
              <Text uppercase>Menší panel</Text>

              <Box row gap="big" alignItems="center">
                <Icon name="energy-icon" title="W" width={35} height={35} />
                <Text>435-445 W</Text>
              </Box>

              <Box row gap="big" alignItems="center">
                <Icon name="size-icon" title="mm" width={35} height={35} />
                <Text>2102x1040x30 mm</Text>
              </Box>

              <Box row gap="big" alignItems="center">
                <Icon name="weight-icon" title="kg" width={35} height={35} />
                <Text>24 kg</Text>
              </Box>
            </Box>

            <Counter value={small} onChange={setSmall} />
          </Box>
        </Box>

        <Box as="article" alignItems="center">
          <Image
            src="images/solar-panel-big.png"
            alt="Väčší solárny panel"
            width={613}
            height={382}
          />

          <Box row width="100%" pt="l" gap="6xl" alignItems="flex-end">
            <Box gap="l">
              <Text uppercase>Väčší panel</Text>

              <Box row gap="big" alignItems="center">
                <Icon name="energy-icon" title="W" width={35} height={35} />
                <Text>530-555 W</Text>
              </Box>

              <Box row gap="big" alignItems="center">
                <Icon name="size-icon" title="mm" width={35} height={35} />
                <Text>2279x1134x35 mm</Text>
              </Box>

              <Box row gap="big" alignItems="center">
                <Icon name="weight-icon" title="kg" width={35} height={35} />
                <Text>28,3 kg</Text>
              </Box>
            </Box>

            <Counter value={big} onChange={setBig} />
          </Box>
        </Box>
      </Box>

      <Button wide onClick={show}>
        Požiadať o zaslanie cenovej ponuky
      </Button>
    </>
  )
}

export default React.memo(Panels)
