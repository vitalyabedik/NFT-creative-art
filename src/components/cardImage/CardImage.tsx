import styled from 'styled-components'

type PropsType = Partial<{
  position: string
}>

export const CardImage = styled.img<PropsType>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: inherit;
`
