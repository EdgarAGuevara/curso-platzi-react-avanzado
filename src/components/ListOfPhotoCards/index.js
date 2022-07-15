import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS_BY_CATEGORY = gql`
query getPhotos($categoryId:ID){
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const ListOfPhotoCards = ({ categoryId = 1 }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS_BY_CATEGORY, { variables: { categoryId } })

  if (error) return <h2>Internal Server Error</h2>

  if (loading) return <h2>Loading...</h2>

  return (
    <ul>
      {
        data.photos.map(photo =>
          <PhotoCard key={photo.id} {...photo} />
        )
      }
    </ul>
  )
}
