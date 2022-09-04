import React from 'react'

import { Box, Light, Text } from 'ui'
import { List } from 'components'

const Benefits = () => (
  <>
    <Box as="header" mb="5xl" tablet={{ mb: '7xl' }} desktop={{ mb: 'block' }}>
      <Text
        as="h1"
        variant="heading1"
        mb="s"
        tablet={{ mb: 'm' }}
        desktop={{ mb: 'l' }}
      >
        CEC6-72MH
      </Text>

      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Box>

    <Box as="article">
      <Text as="h2" variant="heading2" mb="3xl" tablet={{ mb: '4xl' }}>
        Výhody tohto produktu
      </Text>

      <Box largeDesktop={{ maxw: '75%' }} maxw="100%">
        <List
          items={[
            'Nízka hmotnosť, jednoduchá inštalácia, vysoký nákladový výkon, vysoká účinnosť',
            'Modul certifikovaný na odolnosť voči extrémnemu vetru (2400 Pascalov) a zaťaženie snehom (5400 Pascalov)',
            'Garantovaný výkon: 0~+5W',
            'Vynikajúci výkon pri slabom osvetlení, napr. keď je zamračené, ráno, alebo západ slnka',
            'Nezávislá certifikácia medzinárodnými certifikačnými inštitúciami, zahŕňa IEC61215, IEC61730, UL1703, CE',
          ]}
        />
      </Box>
    </Box>

    <Light bg="secondary" size={522} bottom={32} right={-296} />
  </>
)

export default React.memo(Benefits)
