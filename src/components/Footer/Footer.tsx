import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Box, Text, Container, Icon } from '~/ui'
import { scrollTop } from '~/utils/functions'

import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FB_URL,
  IG_URL,
  IN_URL,
} from '~/constants/global'

import * as S from './styled'

const Footer = () => {
  const { t } = useTranslation()
  const { pathname } = useRouter()

  return (
    <Box as="footer" css={{ marginTop: '$section' }}>
      <Container>
        <Box
          as="footer"
          css={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',

            paddingTop: '$8',
            paddingBottom: '$13',
            gap: '$13',

            '@tablet': {
              paddingTop: '$11',
            },

            borderTop: '0.5px solid $light',
            ...S.wrapperResponsive,
          }}
        >
          <Box css={{ gap: '$7' }}>
            <Text
              as={Link}
              variant="footer"
              target="_blank"
              rel="noreferrer noopener"
              href={`mailto:${CONTACT_EMAIL}`}
              css={{ color: '$light' }}
            >
              {CONTACT_EMAIL}
            </Text>

            <Text
              as={Link}
              variant="footer"
              target="_blank"
              rel="noreferrer noopener"
              href={`tel:${CONTACT_PHONE}`}
              css={{ color: '$light' }}
            >
              {CONTACT_PHONE}
            </Text>

            <Box
              css={{
                flexDirection: 'row',
                display: 'none',
                marginLeft: '-$3',

                '& > a': {
                  display: 'inline-flex',
                  padding: '$3',
                },
              }}
            >
              <Link
                target="_blank"
                aria-label="Instagram link"
                rel="noreferrer noopener"
                href={IG_URL}
              >
                <Icon name="ig-icon" width={28} height={28} />
              </Link>

              <Link
                target="_blank"
                aria-label="Facebook link"
                rel="noreferrer noopener"
                href={FB_URL}
              >
                <Icon name="fb-icon" width={28} height={28} />
              </Link>

              <Link
                target="_blank"
                aria-label="Linkedin link"
                rel="noreferrer noopener"
                href={IN_URL}
              >
                <Icon name="in-icon" width={28} height={28} />
              </Link>
            </Box>
          </Box>

          <Box css={{ gap: '$7' }}>
            <Text variant="footer">JP Green Energy, s.r.o.</Text>
            <Text variant="footer">Stará Vajnorská 11/A 831 04</Text>
            <Text variant="footer">Bratislava Slovakia</Text>
          </Box>

          <Box
            as="nav"
            css={{
              alignItems: 'stretch',
              marginTop: '-$4',
              marginLeft: '-$4',

              '& > a': {
                display: 'inline-flex',
                alignItems: 'center',
                padding: '$4',

                color: '$light',
                userSelect: 'none',

                opacity: 0.4,
                transition: 'opacity 200ms',

                '&:hover': {
                  opacity: 0.7,
                },

                '&.active': {
                  opacity: 1,
                },
              },
            }}
          >
            <Text
              as={Link}
              variant="footer"
              href="/"
              className={pathname === '/' ? 'active' : ''}
            >
              {t('global:navigation.home')}
            </Text>

            <Text
              as={Link}
              variant="footer"
              href="/solar-energy"
              className={pathname === '/solar-energy' ? 'active' : ''}
            >
              {t('global:navigation.solarEnergy')}
            </Text>

            <Text
              as={Link}
              variant="footer"
              href="/contact"
              className={pathname === '/contact' ? 'active' : ''}
            >
              {t('global:navigation.contact')}
            </Text>

            <Text
              as={Link}
              variant="footer"
              href="/products"
              className={pathname === '/products' ? 'active' : ''}
            >
              {t('global:navigation.products')}
            </Text>

            <Text
              as={Link}
              variant="footer"
              href="/services"
              className={pathname === '/services' ? 'active' : ''}
            >
              {t('global:navigation.services')}
            </Text>

            <Text
              as={Link}
              variant="footer"
              href="/about-us"
              className={pathname === '/about-us' ? 'active' : ''}
            >
              {t('global:navigation.aboutUs')}
            </Text>
          </Box>

          <Box>
            <Link href="/">
              <Image
                src="/assets/logo-long.svg"
                alt="JP Green Energy logo"
                loading="lazy"
                width={195}
                height={67}
              />
            </Link>
          </Box>

          <Box
            as="button"
            onClick={scrollTop}
            css={{
              display: 'none',
              alignItems: 'center',

              paddingBlock: '$5',
              paddingInline: '$7',
              marginRight: '-$7',

              '@middleDesktop': {
                display: 'flex',
              },
            }}
          >
            <Icon
              name="up-icon"
              title={t('global:footer.button', { defaultValue: 'up' }) || ''}
              width={19}
              height={210}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default memo(Footer)
