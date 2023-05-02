import {
  useCallback,
  useMemo,
  memo,
  type KeyboardEvent,
  type HTMLProps,
} from 'react'
import { ErrorMessage, type FieldAttributes } from 'formik'
import { type ComponentProps } from '@stitches/react'
import { useTranslation } from 'next-i18next'

import Text from '../Text'
import Box from '../Box'

import * as S from './styled'

type TBaseProps = HTMLProps<HTMLInputElement>
type TStyledProps = ComponentProps<typeof S.Field>

type TProps = {
  hasError: boolean
}

type TInputProps = Omit<TBaseProps, keyof TProps> &
  FieldAttributes<unknown> &
  TStyledProps &
  TProps

const Input = ({ as, name, hasError, ...props }: TInputProps) => {
  const { t } = useTranslation()

  const isTextarea = useMemo(() => as === 'textarea', [as])

  const handleChange = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e?.currentTarget?.style) return

    e.currentTarget.style.height = 'auto'
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight + 1}px`
  }, [])

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',

        width: '100%',

        textarea: {
          maxHeight: 500,
          lineHeight: '30px',
          resize: 'none',
        },
      }}
    >
      <S.Field
        id={name}
        component={as}
        onKeyUp={isTextarea ? handleChange : undefined}
        css={{ borderBottomColor: hasError ? '$error' : undefined }}
        {...{ name, ...props }}
      />

      {hasError && name && (
        <Text
          as="small"
          css={{
            color: '$error',
            marginTop: '$4',

            '&::first-letter': {
              textTransform: 'uppercase',
            },
          }}
        >
          <ErrorMessage
            name={name}
            render={(msg) =>
              t(`validation:${msg}`, {
                name: t(`components:form.fields.${name}`),
              })
            }
          />
        </Text>
      )}
    </Box>
  )
}

export default memo(Input) as typeof Input
