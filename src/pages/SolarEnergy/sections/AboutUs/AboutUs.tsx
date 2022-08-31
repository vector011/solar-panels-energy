import React from 'react'

import { Box, Text } from 'ui'

import * as S from './styled'

type Props = {}

const AboutUs = ({}: Props) => (
  <>
    <Text
      as="h2"
      variant="heading2"
      mb="s"
      tablet={{ mb: 'm' }}
      desktop={{ maxw: '50%', mb: 'l' }}
    >
      O nás - váš energetický partner
    </Text>

    <Box as="article" tablet={{ row: true }} gap="m" equal>
      <Box>
        <Text as="h3" variant="subheading" desktop={{ maxw: '70%' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </Text>
      </Box>

      <Text>
        JP green energy, s.r.o. je celoeurópska spoločnosť, ktorá sa venuje
        predaju kvalitných a výkonných solárnych panelov, ako aj inštaláciám a
        výstavbe solárnych elektrární a solárnych parkov. Hlavnou víziou JP
        green energy je zvyšovať podiel spotreby elektrickej energie z
        obnoviteľných zdrojov pomocou zabezpečovania kompletného sortimentu v
        rámci ľubovoľného projektu našich zákazníkov. V prípade záujmu dokážeme
        byť súčinní pri výstavbe akejkoľvek solárnej elektrárne.
        <br />
        <br />
        Predaj vysokokvalitných produktov za najlepšie možné ceny je princíp,
        ktorého sa pevne držíme. Okrem prijateľnej ceny vieme zabezpečiť rýchle
        dodanie tovaru v rámci celej Európy. S našim prístupom sú spokojní
        veľkoodberatelia aj domácnosti.
      </Text>
    </Box>
  </>
)

export default React.memo(AboutUs)
