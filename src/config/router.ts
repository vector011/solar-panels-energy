import i18next from 'i18next'

export enum ROUTE {
  HOME = 'home', // index route
  SOLAR_ENERGY = 'solar-energy',
  CONTACT = 'contact',
  PRODUCTS = 'products',
  SERVICES = 'services',
  ABOUT_US = 'about-us',
}

export const titles = {
  [ROUTE.SOLAR_ENERGY]: i18next.t('global:navigation.solarEnergy'),
  [ROUTE.CONTACT]: i18next.t('global:navigation.contact'),
  [ROUTE.PRODUCTS]: i18next.t('global:navigation.products'),
  [ROUTE.SERVICES]: i18next.t('global:navigation.services'),
  [ROUTE.ABOUT_US]: i18next.t('global:navigation.aboutUs'),
}

type TRoute = `${ROUTE}`

export const getRoute = (route: TRoute) =>
  `/${route !== ROUTE.HOME ? route : ''}`
