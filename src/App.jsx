import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Loading from './components/en/Loading.jsx'

function App() {

  const MyHome = React.lazy(() => import('./pages/Home/Home.jsx'));
  const MyProyects = React.lazy(() => import('./pages/Projects/Proyects.jsx'));
  const MyAbout = React.lazy(() => import('./pages/About/About.jsx'));

  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/proyects" element={<MyProyects />} />
            <Route path="/about" element={<MyAbout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
