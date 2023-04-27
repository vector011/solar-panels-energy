import { memo, useCallback, useMemo, useState } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { useTranslation } from 'next-i18next'

import { Box, Button, Input, Text } from '~/ui'
import { useMail } from '~/hooks'
import validationSchema, { type ContactData } from '~/schemas/contact'
import useProductStore from '~/stores/products'

enum TEmailState {
  NONE,
  SUCCESS,
  ERROR,
}

type TProps = {
  subject: string
  addition?: string
  onClose?: () => void
}

const initialValues: ContactData = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
}

const Form = ({ subject, onClose, addition = '' }: TProps) => {
  const { t } = useTranslation()
  const { clear } = useProductStore()

  const { send } = useMail<Omit<TProps, 'onClose'> & ContactData>()

  const STATE_MESSAGES = useMemo(
    () => ({
      [TEmailState.NONE]: t('components:form.buttons.send'),
      [TEmailState.SUCCESS]: t('components:form.buttons.success'),
      [TEmailState.ERROR]: t('components:form.buttons.error'),
    }),
    [t]
  )

  const [state, setState] = useState<TEmailState>(TEmailState.NONE)

  const onSubmit = useCallback(
    (values: ContactData) => {
      send({ subject, addition, ...values })
        .then(() => {
          setState(TEmailState.SUCCESS)
          onClose?.()

          if (addition) clear()
        })
        .catch(() => setState(TEmailState.ERROR))
    },

    [subject, addition, onClose, setState, send, clear]
  )

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }} validateOnChange>
      {({ errors, touched, isSubmitting }) => {
        const isDisabled = isSubmitting && state === TEmailState.NONE

        return (
          <Box as={FormikForm}>
            <Box
              css={{
                marginBottom: '$10',
                gap: '$10',

                '@tablet': {
                  flexDirection: 'row',
                  gap: '$6',
                  marginBottom: '$8',
                },
              }}
            >
              <Input
                type="text"
                name="name"
                placeholder={`${t('components:form.fields.name')}*`}
                disabled={isDisabled}
                hasError={!!touched.name && !!errors.name}
                required
              />

              <Input
                type="text"
                name="surname"
                placeholder={`${t('components:form.fields.surname')}*`}
                disabled={isDisabled}
                hasError={!!touched.surname && !!errors.surname}
                required
              />
            </Box>

            <Box
              css={{
                marginBottom: '$10',
                gap: '$10',

                '@tablet': {
                  flexDirection: 'row',
                  gap: '$6',
                  marginBottom: '$8',
                },
              }}
            >
              <Input
                type="email"
                name="email"
                placeholder={`${t('components:form.fields.email')}*`}
                disabled={isDisabled}
                hasError={!!touched.email && !!errors.email}
                required
              />

              <Input
                type="text"
                name="phone"
                placeholder={t('components:form.fields.phone') || ''}
                disabled={isDisabled}
                hasError={!!touched.phone && !!errors.phone}
              />
            </Box>

            <Input
              as="textarea"
              name="message"
              placeholder={`${t('components:form.fields.message')}*`}
              disabled={isDisabled}
              hasError={!!touched.message && !!errors.message}
              rows={1}
              required
            />

            <Box
              css={{
                flexDirection: 'row',
                marginTop: '$13',
                gap: '$block',
              }}
            >
              <Button
                type="submit"
                secondary={state === TEmailState.SUCCESS}
                disabled={isSubmitting || state === TEmailState.SUCCESS}
                wide={state === TEmailState.SUCCESS}
                isLoading={isDisabled}
                css={{
                  width: '100%',

                  '@tablet': {
                    width: 'auto',
                  },
                }}
              >
                {STATE_MESSAGES[state]}
              </Button>

              {state === TEmailState.ERROR && (
                <Text as="small" css={{ color: '$error' }}>
                  {t('components:form.error')}
                </Text>
              )}
            </Box>
          </Box>
        )
      }}
    </Formik>
  )
}

export default memo(Form)
