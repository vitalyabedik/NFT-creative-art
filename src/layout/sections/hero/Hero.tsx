import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import { BestHero } from '@layout/sections/hero/bestHero'
import { HeroContent } from '@layout/sections/hero/heroContent'
import { HeroData } from '@layout/sections/hero/heroData/HeroData'

export const Hero: React.FC = () => {
  return (
    <StyledHero>
      <Container>
        <FlexContainer gap="30px" justify="space-between" wrap="no-wrap">
          <HeroContent hero={HeroData} />
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
