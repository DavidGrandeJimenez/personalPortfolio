import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './Header.jsx'

function App() {

  const MyHome = React.lazy(() => import('./Home.jsx'));
  const MyProyects = React.lazy(() => import('./pages/Proyects.jsx'));
  return (
    <>
      <Router>
        <Header></Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MyHome></MyHome>} />
            <Route path="/proyects" element={<MyProyects></MyProyects>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
