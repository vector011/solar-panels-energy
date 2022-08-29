import React from 'react'
import { RouteObject } from 'react-router'

// Layouts
import { Main } from 'layouts'

// Pages
import { Contact, Home, Products, Services, SolarEnergy } from 'pages'

export default [
  {
    path: '',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: 'solarna-energia', element: <SolarEnergy /> },
      { path: 'kontakt', element: <Contact /> },
      { path: 'produkty', element: <Products /> },
      { path: 'sluzby', element: <Services /> },
    ],
  },
] as RouteObject[]
