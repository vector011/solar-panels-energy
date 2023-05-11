import { memo, useCallback } from 'react'
import { type ComponentProps } from '@stitches/react'
import { useTranslation } from 'next-i18next'
import * as Select from '@radix-ui/react-select'

import Box from '../Box'
import Text from '../Text'
import { type CategoryModel } from '~/types/models'

type TStyledProps = ComponentProps<typeof Box>

type TProps = {
  initial?: string
  items: CategoryModel[]
  cb: (value: string) => void
}

type TFilterProps = TStyledProps & TProps

const Filter = ({ items, initial = '', cb, css }: TFilterProps) => {
  const { t } = useTranslation()

  const container =
    typeof document !== 'undefined'
      ? document.getElementById('layout')
      : undefined

  const renderItems = useCallback(
    (item: CategoryModel) => (
      <Box
        as={Select.Item}
        value={item.slug}
        key={`category-${item.slug}`}
        className={item.slug === (initial || '') ? 'active' : ''}
        css={{
          padding: '$4 $6',
          color: '$primary',
          transition: 'all 200ms',
          flexShrink: 0,
          fontWeight: 300,
          fontSize: '$3',
          lineHeight: '$4',
          cursor: 'pointer',

          '&:hover, &.active': {
            backgroundColor: '$primary',
            color: '$dark',
          },
        }}
      >
        <Select.ItemText>{item.name}</Select.ItemText>
        <Select.ItemIndicator />
      </Box>
    ),
    [initial]
  )

  return (
    <Select.Root value={initial || ''} onValueChange={cb}>
      <Box
        as={Select.Trigger}
        css={{
          textAlign: 'left',
          flexDirection: 'row',
          padding: '$4 $6',
          color: '$primary',
          border: '1px solid $primary',
          transition: 'all 200ms',
          flexShrink: 0,
          fontWeight: 300,
          fontSize: '$3',
          lineHeight: '$4',
          gap: '$3',
          cursor: 'pointer',
          justifyContent: 'space-between',

          '&:hover': {
            backgroundColor: '$primary',
            color: '$dark',
          },

          ...css,
        }}
      >
        <Select.Value />
        <Text as={Select.Icon} css={{ fontSize: 12 }} />
      </Box>

      <Select.Portal container={container}>
        <Box
          as={Select.Content}
          css={{
            overflow: 'hidden',
            background: 'url("/assets/images/grain.png") $dark',
            backgroundSize: '20%',

            color: '$primary',
            border: '1px solid $primary',
            transition: 'all 200ms',

            flexShrink: 0,
            fontWeight: 300,
            fontSize: '$3',
            lineHeight: '$4',

            gap: '$3',
          }}
        >
          <Select.Viewport>
            {[
              {
                id: '-1',
                name: t('products:filter.category'),
                slug: '',
              },
              ...items,
            ].map(renderItems)}
          </Select.Viewport>
        </Box>
      </Select.Portal>
    </Select.Root>
  )
}

export default memo(Filter) as typeof Filter
