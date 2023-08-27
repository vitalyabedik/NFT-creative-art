import styled from 'styled-components'

import chargeImage from '@assets/images/amazing/amazing-charge-2.webp'
import cyberpunkImage from '@assets/images/amazing/amazing-cyberpunk-1.webp'
import surgeonImage from '@assets/images/amazing/amazing-surgeon-3.webp'
import { AmazingCard } from '@layout/sections/amazing/amazingCards/amazingCard'

const cardsData = [
  {
    id: 1,
    title: 'Cyberpunk Cocomo',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: cyberpunkImage,
  },
  {
    id: 2,
    title: 'Charge, Qi tiao yu',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: chargeImage,
  },
  {
    id: 3,
    title: 'Surgeon, Josh Rife',
    price: 490,
    moneyType: 'ETH',
    endingTime: '03:24:56',
    backgroundImage: surgeonImage,
  },
]

export const AmazingCards = () => {
  return (
    <StyledAmazingCards>
      {cardsData.map(card => {
        return <AmazingCard key={card.id} {...card} />
      })}
    </StyledAmazingCards>
  )
}

const StyledAmazingCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  flex-basis: 343px;

  width: 100%;
  flex-wrap: nowrap;
  flex-grow: 1;

  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }
`
