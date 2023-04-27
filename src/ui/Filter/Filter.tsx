import { memo, useCallback, type HTMLProps } from 'react'
import { type ComponentProps } from '@stitches/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Box from '../Box'
import Text from '../Text'
import { type CategoryModel } from '~/types/models'
import { omit } from 'lodash'

type TBaseProps = HTMLProps<HTMLDivElement>
type TStyledProps = ComponentProps<typeof Box>

type TProps = {
  param: string
  items: CategoryModel[]
}

type TFilterProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Filter = ({ param, items, css, ...props }: TFilterProps) => {
  const { t } = useTranslation()
  const { query } = useRouter()

  const renderItems = useCallback(
    (item: CategoryModel) => (
      <Text
        as={Link}
        variant="paragraph2"
        key={`${param}-${item.slug}`}
        href={{ query: { [param]: item.slug } }}
        className={query[param] === item.slug ? 'active' : ''}
        shallow
        replace
        css={{
          padding: '$4 $6',
          color: '$primary',
          border: '1px solid $primary',
          transition: 'all 200ms',

          '&:hover, &.active': {
            backgroundColor: '$primary',
            color: '$dark',
          },

          '& + a': {
            borderLeft: 0,
          },
        }}
      >
        {item.name}
      </Text>
    ),
    [param, query]
  )

  return (
    <Box {...props} css={{ flexDirection: 'row', ...css }}>
      <Text
        as={Link}
        variant="paragraph2"
        key={`${param}-all`}
        href={{ query: omit(query, 'category') }}
        className={!query[param] ? 'active' : ''}
        shallow
        replace
        css={{
          padding: '$4 $6',
          color: '$primary',
          border: '1px solid $primary',
          transition: 'all 200ms',

          '&:hover, &.active': {
            backgroundColor: '$primary',
            color: '$dark',
          },

          '& + a': {
            borderLeft: 0,
          },
        }}
      >
        {t('products:filter.category')}
      </Text>

      {items?.map(renderItems)}
    </Box>
  )
}

export default memo(Filter) as typeof Filter
