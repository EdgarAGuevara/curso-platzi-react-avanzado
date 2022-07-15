
import { useMutation, gql } from '@apollo/client'

const MUTATION_SIGNUP = gql`
mutation signup($input: UserCredentials!) {
  signup(input: $input)
}`

export const useRegisterMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_SIGNUP)

  return { mutation, mutationLoading, mutationError }
}
