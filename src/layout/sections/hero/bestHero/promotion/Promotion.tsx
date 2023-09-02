import * as React from 'react'

import { S } from './Promotion_Styles'

import { Button, CardStatus, FlexContainer } from '@/components'
import { useWindowWidth } from '@/hooks'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const Promotion: React.FC<PropsType> = ({ hero }) => {
  const isTablet = useWindowWidth(576)

  return (
    <S.StyledPromotion>
      <FlexContainer gap={isTablet ? '16px' : '24px'}>
        <S.PromotionInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ends in" value={hero.endingTime} />
            <CardStatus title="Current bid" value={`${hero.price}${hero.moneyType}`} />
          </FlexContainer>
        </S.PromotionInfo>
        <S.PromotionButtonContainer>
          <Button bntType="outlined">Place A Bid</Button>
        </S.PromotionButtonContainer>
      </FlexContainer>
    </S.StyledPromotion>
  )
}
