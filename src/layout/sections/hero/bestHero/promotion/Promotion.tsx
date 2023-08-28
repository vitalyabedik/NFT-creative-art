import * as React from 'react'

import { S } from './Promotion_Styles'

import { Button, CardStatus, FlexContainer } from '@/components'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const Promotion: React.FC<PropsType> = ({ hero }) => {
  return (
    <S.StyledPromotion>
      <FlexContainer gap="24px">
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
