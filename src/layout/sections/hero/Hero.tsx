import { S } from './Hero_Styles'

import { Container } from '@/components'
import { BestHero } from '@layout/sections/hero/bestHero'
import { HeroContent } from '@layout/sections/hero/heroContent'
import { HeroData } from '@layout/sections/hero/heroData/HeroData'
import { Stats } from '@layout/sections/hero/stats'

export const Hero: React.FC = () => {
  return (
    <S.StyledHero>
      <Container>
        <S.GridContainer>
          <S.GridItem>
            <HeroContent />
          </S.GridItem>
          <S.GridItem>
            <Stats hero={HeroData} />
          </S.GridItem>
          <S.GridItem>
            <BestHero hero={HeroData} />
          </S.GridItem>
        </S.GridContainer>
      </Container>
    </S.StyledHero>
  )
}
