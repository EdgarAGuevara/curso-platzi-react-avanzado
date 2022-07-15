import React from 'react'
import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const params = useParams()
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.params === props.params
  // We denied the render if and only if the prop call 'id' is the same
})
