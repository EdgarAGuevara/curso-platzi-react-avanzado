
import { useMutation, gql } from '@apollo/client'

const MUTATION_LOGIN = gql`
mutation login($input: UserCredentials!) {
  login(input: $input)
}`

export const useLoginMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LOGIN)

  return { mutation, mutationLoading, mutationError }
}
