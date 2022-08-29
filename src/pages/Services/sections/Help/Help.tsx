import React from 'react'

import { Box, Light, Text } from 'ui'
import { List } from 'components'

import * as S from './styled'

const Help = () => (
  <>
    <Box as="header">
      <Text as="h1" variant="heading1" mb="l">
        Ako vám môžeme pomôcť?
      </Text>
    </Box>

    <Box maxWidth="75%">
      <Text mb="4xl">
        JP green energy, s.r.o. Vám uľahčí život a otvorí dvere do pestrejšej
        budúcnosti pomocou obnoviteľných zdrojov a zelenej energie. Náš tím
        skúsených odborníkov sa Vám bude s radosťou venovať od začiatku až do
        dokončenia vami požadovaného projektu. JP green energy, s.r.o. poskytuje
        nasledovné služby:
      </Text>

      <List
        items={[
          'Inštalácia fotovoltaických zariadení a výstavba solárnych parkov',
          'Financovanie a partnerstvo pri budovaní fotovoltaických zariadení a solárnych parkov',
          'Konzultácie a poradenstvo v oblasti energetiky a obnoviteľných zdrojov',
          'Zabezpečenie a dodávka komponentov na výstavbu fotovoltaických zariadení',
          'Pomoc a podpora pri vykonávaní administratívnych úkonov',
        ]}
      />
    </Box>

    <Light bg="secondary" size={522} bottom={-40} right={-177} />
  </>
)

export default React.memo(Help)
