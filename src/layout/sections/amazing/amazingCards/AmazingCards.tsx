import * as React from 'react'

import { S } from './AmazingCards_Styles'

import { AmazingCard } from '@layout/sections/amazing/amazingCards/amazingCard'
import { AmazingCardType } from '@layout/sections/amazing/amazingData'

type PropsType = {
  amazingData: AmazingCardType[]
}

export const AmazingCards: React.FC<PropsType> = ({ amazingData }) => {
  return (
    <S.StyledAmazingCards>
      {amazingData.map(card => {
        return <AmazingCard key={card.id} {...card} />
      })}
    </S.StyledAmazingCards>
  )
}
