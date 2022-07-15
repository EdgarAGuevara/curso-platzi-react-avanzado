import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      left: 0; //This and 1 and 2 make that this be centralized horizontally
      margin: 0 auto; //1
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0; //2
      top: -20px;
      transform: scale(.5);
      z-index: 1; // this make that it keep over all
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
  
`
