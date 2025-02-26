import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-edgar-thecrash.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)

  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        (loading)
          ? <Item key='loading'>
            <Category />
          </Item>
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {(showFixed) && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
