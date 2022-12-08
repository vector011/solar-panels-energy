import { object, string } from 'yup'
import i18next from 'i18next'

import { PHONE_REGEX } from 'constants/regex'

export default object({
  name: string().required(
    i18next.t('validation:required', {
      name: i18next.t('components:form.fields.name'),
    })!
  ),
  surname: string().required(
    i18next.t('validation:required', {
      name: i18next.t('components:form.fields.surname'),
    })!
  ),
  email: string()
    .required(
      i18next.t('validation:required', {
        name: i18next.t('components:form.fields.email'),
      })!
    )
    .email(
      i18next.t('validation:format', {
        name: i18next.t('components:form.fields.email'),
      })!
    ),
  phone: string()
    .matches(
      PHONE_REGEX,
      i18next.t('validation:format', {
        name: i18next.t('components:form.fields.phone'),
      })!
    )
    .optional(),
  message: string()
    .required(
      i18next.t('validation:required', {
        name: i18next.t('components:form.fields.message'),
      })!
    )
    .max(
      500,
      i18next.t('validation:maxChar', {
        name: i18next.t('components:form.fields.message'),
        limit: 500,
      })!
    ),
}).required()
