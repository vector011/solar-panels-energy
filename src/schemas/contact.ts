import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { PHONE_REGEX } from '~/constants/regex'

const Schema = z
  .object({
    name: z.string({ required_error: 'required' }),

    surname: z.string({ required_error: 'required' }),

    email: z.string({ required_error: 'required' }).email('format'),

    phone: z.string().regex(PHONE_REGEX, 'format').optional(),

    message: z.string({ required_error: 'required' }).max(500, 'maxLength500'),
  })
  .strict()

export type ContactData = z.infer<typeof Schema>

export default toFormikValidationSchema(Schema)
