import styled from 'styled-components'

import { CardPhoto } from '@/components'
import { HeroType } from '@layout/sections'
import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'

type PropsType = {
  hero: HeroType
}

export const BestHero = ({ hero }: PropsType) => {
  return (
    <StyledBestHero>
      <CardPhotoContainer>
        <CardPhoto
          height="548px"
          width="464px"
          borderRadius="24px"
          background={`url(${hero.backgroundImage}), lightgray 0px -11.436px / 100% 127.941%`}
        />
      </CardPhotoContainer>
      <CircleAnimatedElement />
      <Promotion hero={hero} />
    </StyledBestHero>
  )
}

const StyledBestHero = styled.div`
  padding: 0 51px 93px 60px;
  position: relative;
  width: 100%;
  max-width: 575px;
  min-height: 575px;
`

const CardPhotoContainer = styled.div`
  position: relative;
`
