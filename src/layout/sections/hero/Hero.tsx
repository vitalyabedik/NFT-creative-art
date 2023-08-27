import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { BestHero } from '@layout/sections/hero/bestHero'
import { Content } from '@layout/sections/hero/content'
import { HeroData } from '@layout/sections/hero/heroData/HeroData'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexContainer gap="30px" justify="space-between" wrap="no-wrap">
          <Content hero={HeroData} />
          <BestHero hero={HeroData} />
        </FlexContainer>
      </Container>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: #d28bd2;
  z-index: 99999;
`
