import { memo, useCallback, useState } from 'react'
import { type ComponentProps } from '@stitches/react'

import * as S from './styled'

import Box from '../Box'
import { useDebounceEffect } from '~/hooks'

type TBaseProps = React.HTMLProps<HTMLInputElement>
type TStyledProps = ComponentProps<typeof S.Field>

type TProps = {
  cb: (value: string) => void
}

type TSearchProps = Omit<TBaseProps, keyof TProps> & TStyledProps & TProps

const Search = ({ cb, name, ...props }: TSearchProps) => {
  const [value, setValue] = useState<string>('')

  useDebounceEffect(() => cb(value), [value])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget) return
    setValue(e.currentTarget.value)
  }, [])

  return (
    <Box
      css={{
        display: 'flex',
        alignItem: 'stretch',
        isolation: 'isolate',
        position: 'relative',
        maxWidth: 380,
        width: '100%',
      }}
    >
      <S.Field
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Box>
  )
}

export default memo(Search) as typeof Search
