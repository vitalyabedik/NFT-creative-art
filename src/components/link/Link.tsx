import styled from 'styled-components'

export const Link = () => {
  return <StyledLink href="#">Ссылка</StyledLink>
}

const StyledLink = styled.a`
  background-color: gray;
`
