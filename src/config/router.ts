export enum ROUTE {
  HOME = 'home', // index route
  SOLAR_ENERGY = 'solar-energy',
  CONTACT = 'contact',
  PRODUCTS = 'products',
  SERVICES = 'services',
  ABOUT_US = 'about-us',
}

type TRoute = `${ROUTE}`

export const getRoute = (route: TRoute) =>
  `/${route !== ROUTE.HOME ? route : ''}`
