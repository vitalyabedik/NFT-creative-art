import styled from 'styled-components'

import { Button, CardStatus, FlexContainer, Icon } from '@/components'
import { theme } from '@assets/styles/Theme'
import { CardPhoto } from '@components/cardPhoto'

type PropsType = {
  title: string
  price: number
  moneyType: string
  endingTime: string
  backgroundImage: string
}

export const AmazingCard = ({
  title,
  price,
  moneyType,
  endingTime,
  backgroundImage,
}: PropsType) => {
  return (
    <StyledAmazingCard>
      <FlexContainer direction="column" gap="24px">
        <CardPhoto
          background={`url(${backgroundImage}), lightgray 0px -26.79px / 100% 146.516% no-repeat`}
          isCard
        />
        <CardDescription>
          <FlexContainer justify="space-between">
            <h3>{title}</h3>
            <CardPrice>
              <FlexContainer align="center" gap="4px">
                <Icon iconId="ethereum" />
                <h5>
                  {price}
                  <span>{moneyType}</span>
                </h5>
              </FlexContainer>
            </CardPrice>
          </FlexContainer>
        </CardDescription>
        <CardInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ending In" value={endingTime} paddingBottom="4px" showIcon={true} />
            <Button bntType="outlined">Place A Bid</Button>
          </FlexContainer>
        </CardInfo>
      </FlexContainer>
    </StyledAmazingCard>
  )
}

const StyledAmazingCard = styled.div`
  background-color: ${theme.colors.secondaryBg};
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.accent};
`

const CardDescription = styled.div``

const CardInfo = styled.div``

const CardPrice = styled.div``
