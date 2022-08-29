import React, { useCallback } from 'react'
import { To, useNavigate } from 'react-router'

import { Box, Button, Image, Light, Text } from 'ui'

import * as S from './styled'

const Header = () => {
  const navigate = useNavigate()

  const navigateTo = useCallback((to: To) => () => navigate(to), [navigate])

  return (
    <>
      <Box as="article">
        <Text as="h1" variant="heading1" mb="l">
          Meníme slnečné svetlo na energiu pre lepšiu budúcnosť
        </Text>

        <Text mb="4xl" maxw="70%">
          Poskytujeme zabezpečenie materiálu, poradenstvo a možnosť
          spolufinancovania projektov zameraných na výrobu elektriny z
          obnoviteľných zdrojov. Vieme poskytnúť riešenia, ktoré budú šetriť
          nielen životné prostredie, ale aj vašu peňaženku.
        </Text>

        <Box row flexWrap gap="4xl">
          <Button onClick={navigateTo('/produkty')}>Produkty</Button>
          <Button onClick={navigateTo('/sluzby')} secondary>
            Služby
          </Button>
        </Box>
      </Box>

      <Box position="relative" ml="-8%" mr="-6%" pt="5xl">
        <Image
          src="images/solar-panel-1.png"
          alt="Veľký a malý solárny panel"
          width={984}
          height={566}
        />

        <Light bg="secondary" size={522} bottom={-240} right={-177} />
      </Box>
    </>
  )
}

export default React.memo(Header)
