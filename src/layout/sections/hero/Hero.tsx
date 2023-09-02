import styled from 'styled-components'

import { Container } from '@/components'
import { theme } from '@assets/styles/Theme'
import { BestHero } from '@layout/sections/hero/bestHero'
import { HeroContent } from '@layout/sections/hero/heroContent'
import { HeroData } from '@layout/sections/hero/heroData/HeroData'
import { Stats } from '@layout/sections/hero/stats'

export const Hero: React.FC = () => {
  return (
    <StyledHero>
      <Container>
        <GridContainer>
          <GridItem>
            <HeroContent />
          </GridItem>
          <GridItem>
            <Stats hero={HeroData} />
          </GridItem>
          <GridItem>
            <BestHero hero={HeroData} />
          </GridItem>
        </GridContainer>
      </Container>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  background-color: #d28bd2;
  z-index: 99999;
`
const GridContainer = styled.div`
  background-color: red;
  display: grid;
  column-gap: 171px;
  row-gap: 50px;
  grid-template-columns: 544px 1fr;
  grid-template-rows: 457px 128px;

  @media ${theme.media.extra.heroBigDesktop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }

  @media ${theme.media.extra.heroDesktop} {
    column-gap: 50px;
  }

  @media ${theme.media.extra.heroTablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(1px, auto));
    justify-items: center;
    row-gap: 48px;
  }
`

const GridItem = styled.div`
  background-color: green;

  &:first-child {
    grid-area: 1/1/2/2;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 1/1/1/2;
    }
  }

  &:nth-child(2) {
    grid-area: 2/1/3/2;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 3/1/4/1;
    }
  }

  &:last-child {
    grid-area: 1/2/2/3;

    @media ${theme.media.extra.heroTablet} {
      grid-area: 2/1/3/1;
      width: 70%;
    }

    @media ${theme.media.mobile} {
      grid-area: 2/1/3/1;
      width: 343px;
    }

    @media ${theme.media.smallMobile} {
      grid-area: 2/1/3/1;
      width: 343px;
    }
  }
`
