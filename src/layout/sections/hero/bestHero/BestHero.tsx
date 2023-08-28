import * as React from 'react'

import { S } from './BestHero_Styles'

import { CardPhoto } from '@/components'
import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const BestHero: React.FC<PropsType> = ({ hero }) => {
  return (
    <S.StyledBestHero>
      <S.CardPhotoContainer>
        <CardPhoto
          height="548px"
          width="464px"
          borderRadius="24px"
          background={`url(${hero.backgroundImage}), lightgray 0px -11.436px / 100% 127.941%`}
        />
      </S.CardPhotoContainer>
      <CircleAnimatedElement />
      <Promotion hero={hero} />
    </S.StyledBestHero>
  )
}
