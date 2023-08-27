import styled from 'styled-components'

type PropsType = {
  photo?: string
}

export const Avatar = styled.div<PropsType>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: ${({ photo }) => (photo ? `url(${photo})` : 'none')};
  background-size: cover;
  background-position: center;
`
