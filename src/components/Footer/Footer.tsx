import React from 'react'
import { NavLink } from 'react-router-dom'

import { Box, Container, ExternalLink, Icon, Image, Text } from 'ui'
import { scrollTop } from 'utils/functions'

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FB_URL,
  IG_URL,
  IN_URL,
} from 'constants/global'

import * as S from './styled'

const Footer = () => (
  <Box as="footer" mt="section">
    <Container>
      <Box
        as={S.Wrapper}
        justifyContent="space-between"
        pt="l"
        tablet={{ pt: '3xl' }}
        pb="5xl"
        gap="5xl"
        flexWrap
        row
      >
        <Box gap="m">
          <ExternalLink href={CONTACT_EMAIL} type="mail">
            <Text variant="button" color="light" uppercase>
              {CONTACT_EMAIL}
            </Text>
          </ExternalLink>

          <ExternalLink href={CONTACT_PHONE} type="phone">
            <Text variant="button" color="light" uppercase>
              {CONTACT_PHONE}
            </Text>
          </ExternalLink>

          <Box as={S.SocialIcons} row>
            <ExternalLink href={IG_URL}>
              <Icon name="ig-icon" width={28} height={28} />
            </ExternalLink>

            <ExternalLink href={FB_URL}>
              <Icon name="fb-icon" width={28} height={28} />
            </ExternalLink>

            <ExternalLink href={IN_URL}>
              <Icon name="in-icon" width={28} height={28} />
            </ExternalLink>
          </Box>
        </Box>

        <Box gap="m">
          <Text variant="button" uppercase>
            JP Green Energy, s.r.o.
          </Text>
          <Text variant="button" uppercase>
            Stará Vajnorská 11/A 831 04
          </Text>
          <Text variant="button" uppercase>
            Bratislava Slovakia
          </Text>
        </Box>

        <Box as={S.Nav} alignItems="stretch">
          <NavLink to="/">Domov</NavLink>
          <NavLink to="/solarna-energia">Solárna energia</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <NavLink to="/produkty">Produkty</NavLink>
          <NavLink to="/sluzby">Služby</NavLink>
        </Box>

        <Box>
          <NavLink to="/">
            <Image
              src="logo-long.svg"
              alt="JP Green Energy logo"
              loading="lazy"
              width={195}
              height={67}
            />
          </NavLink>
        </Box>

        <S.ScrollTop onClick={scrollTop}>
          <Icon name="up-icon" title="Navigovať hore" width={19} height={210} />
        </S.ScrollTop>
      </Box>
    </Container>
  </Box>
)

export default React.memo(Footer)
