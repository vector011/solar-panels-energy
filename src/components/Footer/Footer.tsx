import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Box, Container, ExternalLink, Icon, Image, Text } from 'ui'
import { scrollTop } from 'utils/functions'
import { getRoute } from 'config/router'

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FB_URL,
  IG_URL,
  IN_URL,
} from 'constants/global'

import * as S from './styled'

const Footer = () => {
  const { t } = useTranslation()

  return (
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
              <ExternalLink
                href={IG_URL}
                target="_blank"
                aria-label="Instagram link"
              >
                <Icon name="ig-icon" width={28} height={28} />
              </ExternalLink>

              <ExternalLink
                href={FB_URL}
                target="_blank"
                aria-label="Facebook link"
              >
                <Icon name="fb-icon" width={28} height={28} />
              </ExternalLink>

              <ExternalLink
                href={IN_URL}
                target="_blank"
                aria-label="Linkedin link"
              >
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
            <NavLink to={getRoute('home')}>
              {t('global:navigation.home')}
            </NavLink>

            <NavLink to={getRoute('solar-energy')}>
              {t('global:navigation.solarEnergy')}
            </NavLink>

            <NavLink to={getRoute('contact')}>
              {t('global:navigation.contact')}
            </NavLink>

            <NavLink to={getRoute('products')}>
              {t('global:navigation.products')}
            </NavLink>

            <NavLink to={getRoute('services')}>
              {t('global:navigation.services')}
            </NavLink>
          </Box>

          <Box>
            <NavLink to={getRoute('home')}>
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
            <Icon
              name="up-icon"
              title={t('global:footer.button', { defaultValue: 'up' })!}
              width={19}
              height={210}
            />
          </S.ScrollTop>
        </Box>
      </Container>
    </Box>
  )
}

export default React.memo(Footer)
