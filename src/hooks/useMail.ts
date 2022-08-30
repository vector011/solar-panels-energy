import { useCallback } from 'react'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

type Response = Promise<EmailJSResponseStatus>

type UseMail<T> = {
  send: (templateParams: Record<keyof T, string>) => Response
}

export default <T>(): UseMail<T> => {
  const send = useCallback(
    (templateParams: Record<keyof T, string>): Response =>
      emailjs.send(
        process.env.MAIL_SERVICE_ID,
        process.env.MAIL_TEMPLATE_ID,
        templateParams,
        process.env.MAIL_USER_ID
      ),
    []
  )

  return { send }
}
