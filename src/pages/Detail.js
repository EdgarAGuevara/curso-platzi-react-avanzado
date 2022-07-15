import React from 'react'
import { useParams } from 'react-router'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const params = useParams()
  return (
    <Layout title={`Fotografía ${params.detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  )
}
