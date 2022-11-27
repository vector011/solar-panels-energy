import React, { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Form as FormikForm } from 'formik'
import { InferType } from 'yup'

import validationSchema from 'schemas/contact'
import { Box, Button, Input, Text } from 'ui'
import { useMail } from 'hooks'
import { TEmailState } from 'types/global'

import * as S from './styled'

type Props = {
  subject: string
  addition?: string
  cb?: () => void
}

type Fields = InferType<typeof validationSchema>

type MailParams = Omit<Props, 'cb'> & Fields

const initialValues: Fields = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
}

const Form = ({ subject, cb, addition = '' }: Props) => {
  const { t } = useTranslation()

  const { send } = useMail<MailParams>()

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
    (values: Fields) =>
      send({ ...{ subject, addition, ...values } })
        .then(() => {
          setState(TEmailState.SUCCESS)
          cb?.()
        })
        .catch(() => setState(TEmailState.ERROR)),
    [subject, addition, cb, setState, send]
  )

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }} validateOnChange>
      {({ errors, touched, isSubmitting }) => {
        const isDisabled = isSubmitting && state === TEmailState.NONE

        return (
          <Box as={FormikForm}>
            <Box mb="xxl" gap="xxl" tablet={{ row: true, gap: 'sm', mb: 'l' }}>
              <Input
                type="text"
                name="name"
                placeholder={`${t('components:form.fields.name')}*`}
                disabled={isDisabled}
                hasError={touched.name && errors.name}
                required
              />

              <Input
                type="text"
                name="surname"
                placeholder={`${t('components:form.fields.surname')}*`}
                disabled={isDisabled}
                hasError={touched.surname && errors.surname}
                required
              />
            </Box>

            <Box gap="xxl" tablet={{ row: true, gap: 'sm' }} mb="4xl">
              <Input
                type="email"
                name="email"
                placeholder={`${t('components:form.fields.email')}*`}
                disabled={isDisabled}
                hasError={touched.email && errors.email}
                required
              />

              <Input
                type="text"
                name="phone"
                placeholder={t('components:form.fields.phone')}
                disabled={isDisabled}
                hasError={touched.phone && errors.phone}
              />
            </Box>

            <Input
              as="textarea"
              name="message"
              placeholder={`${t('components:form.fields.message')}*`}
              disabled={isDisabled}
              hasError={touched.message && errors.message}
              rows="1"
              required
            />

            <Box mt="5xl" row gap="block" css={S.responsiveButton}>
              <Button
                type="submit"
                secondary={state === TEmailState.SUCCESS}
                disabled={isSubmitting || state === TEmailState.SUCCESS}
                wide={state === TEmailState.SUCCESS}
                isLoading={isDisabled}
              >
                {STATE_MESSAGES[state]}
              </Button>

              {state === TEmailState.ERROR && (
                <Text as="small" color="error">
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

export default React.memo(Form)
