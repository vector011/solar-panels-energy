import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { i18n } from 'next-i18next'

import { PHONE_REGEX } from '~/constants/regex'

// TODO: fix schema translation

const Schema = z
  .object({
    name: z.string({
      required_error:
        i18n?.t('validation:required', {
          name: i18n?.t('components:form.fields.name'),
        }) || 'required',
    }),

    surname: z.string({
      required_error:
        i18n?.t('validation:required', {
          name: i18n.t('components:form.fields.surname'),
        }) || 'required',
    }),

    email: z
      .string({
        required_error:
          i18n?.t('validation:required', {
            name: i18n?.t('components:form.fields.email'),
          }) || 'required',
      })
      .email(
        i18n?.t('validation:format', {
          name: i18n?.t('components:form.fields.email'),
        }) || 'format'
      ),

    phone: z
      .string()
      .regex(
        PHONE_REGEX,
        i18n?.t('validation:format', {
          name: i18n?.t('components:form.fields.phone'),
        }) || 'format'
      )
      .optional(),

    message: z
      .string({
        required_error:
          i18n?.t('validation:required', {
            name: i18n?.t('components:form.fields.message'),
          }) || 'required',
      })
      .max(
        500,
        i18n?.t('validation:maxChar', {
          name: i18n?.t('components:form.fields.message'),
          limit: 500,
        }) || 'length'
      ),
  })
  .strict()

export type ContactData = z.infer<typeof Schema>

export default toFormikValidationSchema(Schema)
