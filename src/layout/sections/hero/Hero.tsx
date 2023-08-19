import styled from 'styled-components'

import { FlexContainer } from '@/components'
import { BestHero } from '@layout/sections/hero/bestHero'
import { Content } from '@layout/sections/hero/content'

export const Hero = () => {
  return (
    <StyledHero className="container">
      <FlexContainer justify={'space-between'}>
        <Content />
        <BestHero />
      </FlexContainer>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: #d28bd2;
  padding: 92px 0;
`
