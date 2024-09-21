import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { ErrorPage } from './pages/ErrorPage'

export default function App() {
  //this is the Loading state for button to be used in signUp and Login Button
  const [loading, setLoading] = useState(false);
  // state is to handle errors if user fails to input correct data/inputs
  const [errors, setErrors] = useState({})

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp loading={loading} setLoading={setLoading} errors={errors} setErrors={setErrors} />} />
        <Route path='/Login' element={<Login loading={loading} setLoading={setLoading} errors={errors} setErrors={setErrors} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}
