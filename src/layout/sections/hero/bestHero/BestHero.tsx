import styled from 'styled-components'

import { CardPhoto } from '@components/cardPhoto'
import { HeroType } from '@layout/sections'
import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'

type PropsType = {
  hero: HeroType
}

export const BestHero = ({ hero }: PropsType) => {
  return (
    <StyledBestHero>
      <CardPhoto
        height="548px"
        width="464px"
        borderRadius="24px"
        background={`url(${hero.backgroundImage}), lightgray 0px -11.436px / 100% 127.941%`}
      />
      <CircleAnimatedElement />
      <Promotion hero={hero} />
    </StyledBestHero>
  )
}

const StyledBestHero = styled.div`
  margin: 0 51px 93px 60px;
  position: relative;
`
