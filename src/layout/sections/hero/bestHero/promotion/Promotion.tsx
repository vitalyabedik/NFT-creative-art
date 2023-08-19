import styled from 'styled-components'

import { Button, CardStatus, FlexContainer } from '@/components'

export const Promotion = () => {
  return (
    <StyledPromotion>
      <FlexContainer gap="24px">
        <PromotionInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ends in" value="05:45:47" />
            <CardStatus title="Current bid" value="0.24ETH" />
          </FlexContainer>
        </PromotionInfo>
        <PromotionButtonContainer>
          <Button></Button>
        </PromotionButtonContainer>
      </FlexContainer>
    </StyledPromotion>
  )
}

const StyledPromotion = styled.div`
  background-color: #ac5050;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  width: 264px;
`

const PromotionInfo = styled.div`
  background-color: #4979a3;
  width: 100%;
`

const PromotionButtonContainer = styled.div`
  background-color: #4979a3;
  width: 100%;
  text-align: center;
`
