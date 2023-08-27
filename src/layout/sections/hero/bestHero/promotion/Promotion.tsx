import styled from 'styled-components'

import { Button, CardStatus, FlexContainer } from '@/components'
import { theme } from '@assets/styles/Theme'
import { HeroType } from '@layout/sections/hero/heroData/HeroData'

type PropsType = {
  hero: HeroType
}

export const Promotion = ({ hero }: PropsType) => {
  return (
    <StyledPromotion>
      <FlexContainer gap="24px">
        <PromotionInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ends in" value={hero.endingTime} />
            <CardStatus title="Current bid" value={`${hero.price}${hero.moneyType}`} />
          </FlexContainer>
        </PromotionInfo>
        <PromotionButtonContainer>
          <Button bntType="outlined">Place A Bid</Button>
        </PromotionButtonContainer>
      </FlexContainer>
    </StyledPromotion>
  )
}

const StyledPromotion = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  max-width: 264px;
  width: 100%;

  border-radius: 16px;
  border-top: 1px solid ${theme.colors.accent};
  background-color: ${theme.colors.secondaryBg};
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
`

const PromotionInfo = styled.div`
  width: 100%;
`

const PromotionButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`
