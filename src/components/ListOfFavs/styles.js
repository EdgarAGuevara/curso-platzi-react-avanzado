import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display: inline-block;
  margin: 1%;
  overflow:  hidden;
  width:  31.33%;
  position: relative;
  &:after{
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
