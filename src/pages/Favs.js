import React from 'react'
import { GetFavoriteWithQuery } from '../container/GetFavoriteWithQuery'
import { Layout } from '../components/Layout'

const Favs = () => {
  return (
    <Layout title='Tus favoritos' subTitle='Aquí puedes encontrar tus favoritos'>
      <GetFavoriteWithQuery />
    </Layout>
  )
}

export default Favs
