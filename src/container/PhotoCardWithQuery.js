import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderData = ({ loading, error, data }) => {
  let response = <h2>Loading...</h2>

  if (error) {
    response = <h2>Internal Server Error</h2>
  }
  if (loading) {
    response = <h2>Loading...</h2>
  }

  if (data) {
    const { photo } = data
    response = <PhotoCard {...photo} />
  }

  return response
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    renderData(useQuery(GET_SINGLE_PHOTO, { variables: { id } }))
  )
}
