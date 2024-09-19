import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { ErrorPage } from './pages/ErrorPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}
