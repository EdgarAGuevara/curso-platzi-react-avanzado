import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { GlobalStyle } from './styles/GlobalStyles'
import useAuth from './hooks/useAuth'

// To load by lazy favs component
// import { Favs } from './pages/Favs'
const Favs = React.lazy(() => import('./pages/Favs'))

const App = () => {
  const { isAuth } = useAuth()

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:categoryId' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
        <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
        <Route path='/login' element={<NotRegisteredUser />} />

      </Routes>
      <NavBar />
    </Suspense>
  )
}

export default App
