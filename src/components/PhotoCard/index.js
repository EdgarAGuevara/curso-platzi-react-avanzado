import React from 'react'
import PropTypes from 'prop-types'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Article, Image, ImageWrapper } from './styles'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { mutation } = useMuationToogleLike() // own custom hooks
  const [show, element] = useNearScreen() // own custom hooks

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(` ${propName} Value must be defined`)
    }
    if (propValue < 0) {
      return new Error(` ${propName} Value must be greater than 0`)
    }
  }
}
