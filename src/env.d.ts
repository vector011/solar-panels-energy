// TODO: add mail env

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    MAIL_SERVICE_ID: string
    MAIL_TEMPLATE_ID: string
    MAIL_USER_ID: string
  }
}
