import styled from 'styled-components'

import { Container, FlexContainer } from '@/components'
import heroImage from '@assets/images/hero/hero.webp'
import { BestHero } from '@layout/sections/hero/bestHero'
import { Content } from '@layout/sections/hero/content'

type StatType = {
  id: number
  type: string
  value: number
}

export type HeroType = {
  price: number
  moneyType: string
  endingTime: string
  backgroundImage: string
  stats: StatType[]
}

const heroData: HeroType = {
  price: 0.24,
  moneyType: 'ETH',
  endingTime: '03:24:56',
  backgroundImage: heroImage,
  stats: [
    { id: 1, type: 'Art work', value: 8.9 },
    { id: 2, type: 'Artist', value: 65 },
    { id: 3, type: 'Collection', value: 87 },
  ],
}

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexContainer justify={'space-between'}>
          <Content hero={heroData} />
          <BestHero hero={heroData} />
        </FlexContainer>
      </Container>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: #d28bd2;
  z-index: 99999;
`
