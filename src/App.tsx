import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import routes from 'config/routes'
import { getRoute } from 'config/router'

import { useRouteChange } from 'hooks'
import { TITLE } from 'constants/global'
import { titles } from 'config/router'

const App = () => {
  useRouteChange({
    scrollTop: true,
    changeTitle: {
      prefix: TITLE,
      titles,
    },
  })

  return useRoutes([
    ...routes,
    {
      path: '*', // "No Match" route
      element: <Navigate to={getRoute('home')} />,
    },
  ])
}

export default App
