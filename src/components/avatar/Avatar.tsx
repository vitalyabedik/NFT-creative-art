import styled from 'styled-components'

type PropsType = {
  photo?: string
}

export const Avatar = styled.div<PropsType>`
  background-color: gray;
  width: 48px;
  height: 48px;
  //background-image: ${({ photo }) => `url(${photo})`};
  border-radius: 50%;
`
