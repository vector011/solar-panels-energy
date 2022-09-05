import { object, string } from 'yup'

import { PHONE_REGEX } from 'constants/regex'

export default object({
  name: string().required('Prosím vyplňte meno'),
  surname: string().required('Prosím vyplňte priezvisko'),
  email: string()
    .required('Prosím vyplňte emailovú adresu')
    .email('Nesprávny formát emailovej sdresy'),
  phone: string()
    .matches(PHONE_REGEX, 'Nesprávny formát telefónneho čísla')
    .optional(),
  message: string()
    .required('Prosím vyplňte správu')
    .max(500, 'Správa môže obsahovať maximálne 500 znakov'),
}).required()
