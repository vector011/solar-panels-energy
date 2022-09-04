import React, { useCallback, useState } from 'react'
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

const STATE_MESSAGES = {
  [TEmailState.NONE]: 'Odoslať',
  [TEmailState.SUCCESS]: 'Vaša správa bola úspešne odoslaná.',
  [TEmailState.ERROR]: 'Odoslať znovu',
}

const Form = ({ subject, cb, addition = '' }: Props) => {
  const { send } = useMail<MailParams>()

  const [state, setState] = useState<TEmailState>(TEmailState.NONE)

  const onSubmit = useCallback(
    (values: Fields) =>
      send({ ...{ subject, addition, ...values } })
        .then(() => {
          setState(TEmailState.SUCCESS)
          cb?.()
        })
        .catch(() => setState(TEmailState.ERROR)),
    [subject, addition, cb, setState]
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
                placeholder="Meno*"
                disabled={isDisabled}
                hasError={touched.name && errors.name}
                required
              />

              <Input
                type="text"
                name="surname"
                placeholder="Priezvisko*"
                disabled={isDisabled}
                hasError={touched.surname && errors.surname}
                required
              />
            </Box>

            <Box gap="xxl" tablet={{ row: true, gap: 'sm' }} mb="4xl">
              <Input
                type="email"
                name="email"
                placeholder="E-mail*"
                disabled={isDisabled}
                hasError={touched.email && errors.email}
                required
              />

              <Input
                type="text"
                name="phone"
                placeholder="Telefón"
                disabled={isDisabled}
                hasError={touched.phone && errors.phone}
              />
            </Box>

            <Input
              as="textarea"
              name="message"
              placeholder="Vaša správa*"
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
                  Vašu správu sa nepodarilo odoslať.
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
