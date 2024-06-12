import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'

function App() {

  const MyHome = React.lazy(() => import('./pages/Home/Home.jsx'));
  const MyProyects = React.lazy(() => import('./pages/Projects/Proyects.jsx'));
  const MyAbout = React.lazy(() => import('./pages/About.jsx'));

  return (
    <>
      <Router>
        <Header></Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MyHome></MyHome>} />
            
            <Route path="/proyects" element={<MyProyects></MyProyects>} />
            <Route path="/about" element={<MyAbout  ></MyAbout>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
