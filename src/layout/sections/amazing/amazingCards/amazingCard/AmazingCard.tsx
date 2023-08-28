import { S } from './AmazingCard_Styles'

import { Button, CardStatus, FlexContainer, Icon } from '@/components'
import { CardPhoto } from '@components/cardPhoto'
import { AmazingCardType } from '@layout/sections/amazing/amazingData'

type PropsType = AmazingCardType

export const AmazingCard: React.FC<PropsType> = ({
  title,
  price,
  moneyType,
  endingTime,
  backgroundImage,
}: PropsType) => {
  return (
    <S.StyledAmazingCard>
      <FlexContainer direction="column" gap="24px">
        <CardPhoto
          background={`url(${backgroundImage}), lightgray 0px -26.79px / 100% 146.516% no-repeat`}
          isCard
        />
        <S.CardDescription>
          <FlexContainer justify="space-between">
            <h3>{title}</h3>
            <S.CardPrice>
              <FlexContainer align="center" gap="4px">
                <Icon iconId="ethereum" />
                <h5>
                  {price}
                  <span>{moneyType}</span>
                </h5>
              </FlexContainer>
            </S.CardPrice>
          </FlexContainer>
        </S.CardDescription>
        <S.CardInfo>
          <FlexContainer justify="space-between">
            <CardStatus title="Ending In" value={endingTime} paddingBottom="4px" showIcon={true} />
            <Button bntType="outlined">Place A Bid</Button>
          </FlexContainer>
        </S.CardInfo>
      </FlexContainer>
    </S.StyledAmazingCard>
  )
}
