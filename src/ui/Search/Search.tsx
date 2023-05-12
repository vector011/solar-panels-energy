import { memo, useCallback, useState } from 'react'
import { type ComponentProps } from '@stitches/react'

import * as S from './styled'

import Box from '../Box'
import Icon from '../Icon'
import { useDebounceEffect } from '~/hooks'

type TBaseProps = React.HTMLProps<HTMLInputElement>
type TStyledProps = ComponentProps<typeof S.Field>

type TProps = {
  initial?: string
  cb: (value: string) => void
}

type TSearchProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Search = ({ initial = '', cb, name, ...props }: TSearchProps) => {
  const [value, setValue] = useState<string>(initial)

  useDebounceEffect(() => {
    if ((!value && initial) || value) cb(value)
  }, [value])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget) return
    setValue(e.currentTarget.value)
  }, [])

  const onClear = useCallback(() => {
    setValue('')
  }, [])

  return (
    <Box
      css={{
        position: 'relative',
        display: 'flex',
        alignItem: 'stretch',
        isolation: 'isolate',
        width: '100%',

        '@tablet': {
          maxWidth: 380,
        },
      }}
    >
      <S.Field
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        css={{
          paddingRight: value ? '$7' : 0,
        }}
      />

      <Box
        as="button"
        onClick={onClear}
        css={{
          display: value ? 'flex' : 'none',
          position: 'absolute',
          inset: 0,
          left: 'auto',
          height: '100%',
          paddingInline: '$3',
          justifyContent: 'center',
          marginRight: '-$3',

          path: {
            fill: '$light50',
          },

          '&:hover path': {
            fill: '$light',
          },
        }}
      >
        <Icon name="close-icon" title="clear search" width={10} height={10} />
      </Box>
    </Box>
  )
}

export default memo(Search) as typeof Search
