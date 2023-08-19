import styled from 'styled-components'

import { Button, FlexContainer } from '@/components'

export const Promotion = () => {
  return (
    <StyledPromotion>
      <FlexContainer gap="24px">
        <PromotionInfo>
          <FlexContainer justify="space-between">
            <PromotionTime>
              <PromotionInfoSpan>Ends in</PromotionInfoSpan>
              <Time>05:45:47</Time>
            </PromotionTime>
            <PromotionPrice>
              <PromotionInfoSpan>Current bid</PromotionInfoSpan>
              <Price>0.24ETH</Price>
            </PromotionPrice>
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

const PromotionInfoSpan = styled.div`
  background-color: #4979a3;
  padding-bottom: 8px;
`

const PromotionTime = styled.div`
  background-color: #4979a3;
`

const Time = styled.div`
  background-color: #4979a3;
`

const PromotionPrice = styled.div`
  background-color: #4979a3;
`

const Price = styled.div`
  background-color: #4979a3;
`
