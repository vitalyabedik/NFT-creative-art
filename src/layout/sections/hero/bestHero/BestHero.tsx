import * as React from 'react'

import { S } from './BestHero_Styles'

import { CardPhoto, CardImage } from '@/components'
import { useWindowWidth } from '@/hooks'
import { CircleAnimatedElement } from '@layout/sections/hero/bestHero/CircleAnimatedElement'
import { Promotion } from '@layout/sections/hero/bestHero/promotion'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const BestHero: React.FC<PropsType> = ({ hero }) => {
  const isMobile = useWindowWidth(576)

  return (
    <S.StyledBestHero>
      <S.CardPhotoContainer>
        <CardPhoto
          height="544px"
          maxHeight="544px"
          maxWidth="464px"
          width={'464px'}
          borderRadius="24px"
          positionOptions={{
            position: 'absolute',
            top: '0',
            right: isMobile ? '20px' : '51px',
          }}
          sectionValue={'hero'}
          viewValue={'positioned'}
        >
          <CardImage src={hero.backgroundImage} alt="heroImage" />
        </CardPhoto>
      </S.CardPhotoContainer>
      <CircleAnimatedElement />
      <Promotion hero={hero} />
    </S.StyledBestHero>
  )
}
