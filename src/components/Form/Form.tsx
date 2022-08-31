import React, { useCallback, useMemo, useState } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { InferType } from 'yup'

import validationSchema from 'schemas/contact'
import { Box, Button, Input } from 'ui'

import * as S from './styled'

enum State {
  NONE,
  SUCCESS,
  ERROR,
}

type Fields = InferType<typeof validationSchema>

const initialValues: Fields = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
}

// TODO: mail client

const Form = () => {
  const [state, setState] = useState<State>(State.NONE)

  const onSubmit = useCallback((values: Fields) => console.log(values), [])

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }} validateOnChange>
      {({ errors, touched, isSubmitting }) => {
        const isDisabled = isSubmitting && state === State.NONE

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
                secondary={state === State.SUCCESS}
                disabled={isSubmitting}
                isLoading={isDisabled}
              >
                {state === State.SUCCESS
                  ? 'Vaša správa bola úspešne odoslaná.'
                  : 'Odoslať'}
              </Button>

              {/* error from mail */}
            </Box>
          </Box>
        )
      }}
    </Formik>
  )
}

export default React.memo(Form)
