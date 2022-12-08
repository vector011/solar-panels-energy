import React from 'react'
import { RouteObject } from 'react-router'

import { ROUTE } from './router'

// Layouts
import { Main } from 'layouts'

// Pages
import { AboutUs, Contact, Home, Products, Services, SolarEnergy } from 'pages'

export default [
  {
    path: '',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTE.SOLAR_ENERGY, element: <SolarEnergy /> },
      { path: ROUTE.CONTACT, element: <Contact /> },
      { path: ROUTE.PRODUCTS, element: <Products /> },
      { path: ROUTE.SERVICES, element: <Services /> },
      { path: ROUTE.ABOUT_US, element: <AboutUs /> },
    ],
  },
] as RouteObject[]
