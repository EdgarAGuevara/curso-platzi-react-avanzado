import React from 'react'
import useAuth from '../hooks/useAuth'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useAuth()
  const { mutation, mutationLoading, mutationError } = useRegisterMutation() // own custom hooks
  const { mutation: loginMutation, mutationLoading: loginMutationLoading, mutationError: loginMutationError } = useLoginMutation() // own custom hooks

  const signUpErrorMesg = mutationError && 'El usuario ya existe o hay algun problema.'
  const LoginErrorMesg = loginMutationError && 'Datos de usuario no validos.'

  const handleSignUp = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }

    mutation({
      variables: variable
    }).then(
      ({ data }) => {
        const { signup } = data
        console.log(signup)
        activateAuth(signup)
      }
    )
  }

  const handleLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }

    loginMutation({
      variables: variable
    }).then(
      ({ data }) => {
        const { login } = data
        console.log(login)
        activateAuth(login)
      }
    )
  }
  return (
    <>
      <UserForm disabled={mutationLoading} onSubmit={handleSignUp} error={signUpErrorMesg} title='Registrarse' />
      <UserForm disabled={loginMutationLoading} onSubmit={handleLogin} error={LoginErrorMesg} title='Iniciar Sesión' />
    </>
  )
}
