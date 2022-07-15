import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs{
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}`

const renderData = ({ loading, error, data }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Internal Server Error</h2>
  }

  if (data) {
    const { favs } = data
    return <ListOfFavs favs={favs} />
  }
}

export const GetFavoriteWithQuery = () => {
  return (
    renderData(useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' }))
  )
}
