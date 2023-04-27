import { memo } from 'react'
import { type ComponentProps } from '@stitches/react'
import { useTranslation } from 'next-i18next'

import Box from '../Box'
import { type ProductModel } from '~/types/models'
import useProductStore from '~/stores/products'

import * as S from './styled'

type TStyledProps = ComponentProps<typeof Box>

type TProps = {
  data: ProductModel
}

type TCounterProps = TStyledProps & TProps

const Counter = ({ data, css, ...props }: TCounterProps) => {
  const { t } = useTranslation()

  const { products, increment, decrement } = useProductStore()

  return (
    <Box
      {...props}
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        span: {
          padding: '$4',
          minWidth: 70,
          textAlign: 'center',
        },

        fontWeight: 300,
        fontSize: '$3',
        lineHeight: '$4',

        ...css,
      }}
    >
      <S.Button
        area-label={
          t('components:counter.decrement', {
            defaultValue: 'decrement',
          }) || 'decrement'
        }
        onClick={decrement(data)}
        disabled={!products?.[data.id]?.count}
        css={{
          cursor: !products?.[data.id]?.count ? 'not-allowed' : 'pointer',
          border: `1px solid ${
            !products?.[data.id]?.count ? '$light' : '$primary'
          }`,
          color: !products?.[data.id]?.count ? '$light' : '$primary',
        }}
      >
        -
      </S.Button>

      <span>{products?.[data.id]?.count ?? 0}</span>

      <S.Button
        area-label={
          t('components:counter.increment', {
            defaultValue: 'increment',
          }) || 'increment'
        }
        onClick={increment(data)}
        css={{
          cursor: 'pointer',
          border: '1px solid $primary',
          color: '$primary',
        }}
      >
        +
      </S.Button>
    </Box>
  )
}

export default memo(Counter) as typeof Counter
