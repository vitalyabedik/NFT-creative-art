import styled from 'styled-components'

import { Content } from '@layout/sections/hero/content'

export const Hero = () => {
  return (
    <StyledHero className="container">
      <Content />
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: darkmagenta;
  padding: 92px 0;
`
