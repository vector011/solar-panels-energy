import React, { useEffect } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import routes from 'config/routes'

// TODO: image formats, video size

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return useRoutes([
    ...routes,
    {
      path: '*', // "No Match" route
      element: <Navigate to="/" />,
    },
  ])
}

export default App
