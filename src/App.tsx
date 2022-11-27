import React, { useEffect } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import routes from 'config/routes'
import { getRoute } from 'config/router'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return useRoutes([
    ...routes,
    {
      path: '*', // "No Match" route
      element: <Navigate to={getRoute('home')} />,
    },
  ])
}

export default App
