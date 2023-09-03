import { Fade } from 'react-awesome-reveal'

import { S } from './Hero_Styles'

import { Container } from '@/components'
import { useWindowScroll } from '@/hooks'
import { BestHero } from '@layout/sections/hero/bestHero'
import { HeroContent } from '@layout/sections/hero/heroContent'
import { HeroData } from '@layout/sections/hero/heroData/HeroData'
import { Stats } from '@layout/sections/hero/stats'

export const Hero: React.FC = () => {
  const isScrolled = useWindowScroll()

  return (
    <S.StyledHero id={'home'} isScrolled={isScrolled}>
      <Container>
        <Fade delay={300} triggerOnce={true}>
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
        </Fade>
      </Container>
    </S.StyledHero>
  )
}
