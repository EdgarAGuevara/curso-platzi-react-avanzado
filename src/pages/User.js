import React from 'react'
import useAuth from '../hooks/useAuth'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useAuth()
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
