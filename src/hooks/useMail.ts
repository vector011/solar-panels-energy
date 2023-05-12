import { useCallback } from 'react'
import emailjs, { type EmailJSResponseStatus } from 'emailjs-com'

import { env } from '~/env.mjs'

type Response = Promise<EmailJSResponseStatus>

type UseMail<T> = {
  send: (templateParams: Partial<Record<keyof T, unknown>>) => Response
}

const useMail = <T>(): UseMail<T> => {
  const send = useCallback(
    (templateParams: Partial<Record<keyof T, unknown>>): Response =>
      emailjs.send(
        env.NEXT_PUBLIC_MAIL_SERVICE_ID,
        env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
        templateParams,
        env.NEXT_PUBLIC_MAIL_USER_ID
      ),
    []
  )

  return { send }
}

export default useMail
