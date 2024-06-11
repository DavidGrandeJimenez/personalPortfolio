import React from 'react'
import Home from '../Home.jsx'
export { Home }

export const Proyects = React.lazy(() => import('./Proyects.jsx'));
export const Home = React.lazy(() => import('../Home.jsx'));