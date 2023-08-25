import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { BestHero } from '@layout/sections/hero/bestHero'
import { Content } from '@layout/sections/hero/content'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexContainer justify={'space-between'}>
          <Content />
          <BestHero />
        </FlexContainer>
      </Container>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: #d28bd2;
  z-index: 10;
`
