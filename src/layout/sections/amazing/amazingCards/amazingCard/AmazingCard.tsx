import styled from 'styled-components'

import { Button, CardStatus, FlexContainer, Icon } from '@/components'
import { CardPhoto } from '@components/cardPhoto'

export const AmazingCard = () => {
  return (
    <StyledAmazingCard>
      <FlexContainer direction="column" gap="24px">
        <CardPhoto />
        <CardDescription>
          <FlexContainer justify="space-between">
            <CardTitle>Cyberpunk Cocomo</CardTitle>
            <CardPrice>
              <FlexContainer align="center" gap="4px">
                <Icon iconId="ethereum" />
                <Price>490ETH</Price>
              </FlexContainer>
            </CardPrice>
          </FlexContainer>
        </CardDescription>
        <CardInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ending In" value="03:24:56" paddingBottom="4px" showIcon />
            <Button bntType="outlined">Place A Bid</Button>
          </FlexContainer>
        </CardInfo>
      </FlexContainer>
    </StyledAmazingCard>
  )
}

const StyledAmazingCard = styled.div`
  background-color: darkseagreen;
  padding: 20px;
  border-radius: 28px;
`

const CardDescription = styled.div`
  background-color: aqua;
`

const CardInfo = styled.div`
  background-color: aqua;
`

const CardPrice = styled.div`
  background-color: gray;
`

const Price = styled.p`
  background-color: gray;
`

const CardTitle = styled.h3`
  background-color: gray;
`
