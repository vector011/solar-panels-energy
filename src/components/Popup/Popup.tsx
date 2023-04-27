import { memo, useCallback } from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'

import Form from '../Form'
import { Box, Icon, Text } from '~/ui'
import useProductStore from '~/stores/products'

type TProps = {
  onClose: () => void
}

const Popup = ({ onClose }: TProps) => {
  const { t } = useTranslation()

  const container = document.getElementById('layout')

  const { products } = useProductStore()

  const getProducts = useCallback(
    () =>
      Object.values(products)
        .map((item) => `${item.name}: ${item.count}x`)
        .join('\n'),
    [products]
  )

  return (
    <Dialog.Root defaultOpen onOpenChange={onClose}>
      <Dialog.Portal forceMount container={container}>
        <Dialog.Overlay asChild forceMount>
          <Box
            as={motion.div}
            initial={{ backdropFilter: 'blur(0)' }}
            animate={{ backdropFilter: 'blur(14px)' }}
            exit={{ backdropFilter: 'blur(0)' }}
            css={{
              zIndex: '$modal',
              overflowY: 'auto',
              position: 'fixed',
              inset: 0,
              placeContent: 'center',
              backgroundColor: '$modal',

              '@tablet': {
                padding: '$5',
              },
            }}
          >
            <Dialog.Content asChild forceMount>
              <Box
                as={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                css={{
                  position: 'relative',
                  margin: 'auto',
                  paddingBlock: '$15',
                  paddingInline: '$5',
                  background: 'url("/assets/images/grain.png") $dark',
                  backgroundSize: '20%',
                  width: '100%',
                  maxWidth: 1200,
                  minHeight: '100vh',

                  '@tablet': {
                    minHeight: 'auto',
                  },
                }}
              >
                <Box
                  as={Dialog.Close}
                  css={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '$8',
                    right: '$8',

                    '@tablet': {
                      svg: {
                        size: '32px',
                      },
                    },
                  }}
                >
                  <Icon
                    name="close-icon"
                    title={
                      t('global:button.close', { defaultValue: 'close' }) ||
                      'close'
                    }
                    width={28}
                    height={28}
                  />
                </Box>

                <Box
                  as="article"
                  css={{
                    maxWidth: 740,
                    width: '100%',
                    marginInline: 'auto',
                  }}
                >
                  <Text
                    as="h1"
                    variant="heading2"
                    css={{ marginBottom: '$13' }}
                  >
                    {t('components:popup.title')}
                  </Text>

                  <Form
                    subject={t('components:popup.subject')}
                    addition={getProducts()}
                    onClose={onClose}
                  />
                </Box>
              </Box>
            </Dialog.Content>
          </Box>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default memo(Popup) as typeof Popup
